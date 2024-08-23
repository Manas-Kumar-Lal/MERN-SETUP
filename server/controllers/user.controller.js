const asyncHandler = require("../utilities/asyncHandler.utility.js");
const ErrorHandler = require("../utilities/errorHandler.utility.js");
const User = require('../models/user.model.js');
const sendToken = require("../utilities/sendToken.utility.js");

// register user 
exports.registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password, phoneNumber } = req.body;
    if (!name || !email || !password || !phoneNumber) {
        return next(new ErrorHandler("name, email, phoneNumber, password are required", 400))
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        return next(new ErrorHandler("Email already exists", 409))
    }
    const userData = await User.create({
        name,
        email,
        phoneNumber,
        password,
    })
    sendToken(userData, 200, res);
})