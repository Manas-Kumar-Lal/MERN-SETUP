//creating token and save it in browser cookie
const sendToken = (studentData, statusCode, res, additionalDetails = null) => {
    try {
        const token = studentData.generateToken();
        //cookie options
        const cookieOptions = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true,
            domain: 'school4u.in',
            SameSite: 'None',
            secure: true
        }
        res
            .status(statusCode)
            .cookie('token', token, cookieOptions)
            .json({
                success: true,
                studentData: studentData,
                additionalDetails,
                token
            })
    } catch (error) {
        res.send("token generation failed : ", error)
    }
}

module.exports = sendToken;