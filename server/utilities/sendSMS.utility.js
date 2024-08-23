const twilio = require('twilio');

// Your Twilio Account SID and Auth Token
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Create Twilio client
const client = twilio(accountSid, authToken);

// Function to send SMS
exports.sendSMS = async (recipientNumber, message) => {
    try {
        const result = await client.messages.create({
            from: '+14786062438',
            to: recipientNumber,
            body: message
        })
        // console.log(result.sid)
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
}