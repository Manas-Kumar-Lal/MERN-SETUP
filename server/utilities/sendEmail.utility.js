const nodemailer = require('nodemailer');
const { google } = require('googleapis')

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const SMTP_USER = process.env.SMTP_USER

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)

// to get new referesh token:- https://mail.google.com
oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
})

exports.sendEmail = async ({ email, subject, message }) => {
    try {
        const { token } = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: 'OAuth2',
                user: SMTP_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: token
            }
        })

        const mailOptions = {
            from: `School4U <${SMTP_USER}>`,
            to: email,
            subject: subject,
            // text: message,
            html: message,
        }

        const result = await transporter.sendMail(mailOptions);
        // console.log(result)
        return result;
    } catch (error) {
        console.log("sendemail :: error : ", error)
    }
}
