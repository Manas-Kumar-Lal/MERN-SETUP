const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [3, "Name should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String,
        minLength: [8, "Password should be at least 8 characters"],
        select: false,
    },
    address: {
        type: String,
        default: "",
    },
    course: {
        type: String,
        default: "",
    },
    avatar:
    {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    role: {
        type: String,
        required: true,
        default: "student",
    },
    blocked: {
        type: Boolean,
        required: true,
        default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, { timestamps: true });

// convert email into lowercase
userSchema.pre('save', function (next) {
    this.email = this.email.toLowerCase();
    next();
});

//password hashing
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    } else {
        next();
    }
})

//becrypt comparision password
userSchema.methods.validatePassword = async function (enteredPassword) {
    const isEqual = await bcrypt.compare(enteredPassword, this.password);
    return isEqual;
}

//generate json web token
userSchema.methods.generateToken = function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
    return token;
};

module.exports = mongoose.model("User", userSchema);