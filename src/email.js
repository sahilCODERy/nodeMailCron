const nodemailer = require('nodemailer');
const config = require('dotenv').config();


class Email {
    transporter = ""
    constructor() {
         this.transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.USERNAME,
                pass: process.env.PASSWORD
            }
        });
    }

    sendMail() {
        const mailOptions = {
            from: process.env.USERNAME,
            to: process.env.USERNAME,
            subject: `Reminder at ${new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}`,
            text: process.env.MESSAGE
        };
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email: ", error);
            } else {
                console.log("Email sent: ", info.response);
            }
        });
    }
}

module.exports = new Email();