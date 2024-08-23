const User = require('../models/user.model.js')
const asyncHandler = require("../utilities/asyncHandler.utility.js");
const ErrorHandler = require("../utilities/errorHandler.utility.js");
const jwt = require('jsonwebtoken');

exports.isAuthenticatedUser = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.token || req.header("authorization")?.replace("Bearer ", "");
    if (!token) {
        return next(new ErrorHandler("User not authenticated", 401))
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decodedData._id);
    if (req.user.blocked) {
        return next(new ErrorHandler('"Blocked!!" Access denied as you have been blocked by "School4U" team'))
    }
    next();
})

exports.authorizedRoles = (role) => {
    return (req, res, next) => {
        if (!role.includes(req.user.role)) {
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`, 403))
        }
        next();
    }
}