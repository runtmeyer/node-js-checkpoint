const nodemailer = require('nodemailer');

// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  service: 'Yahoo',
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
  debug: false,
  logger: true,
});

// Email details
const mailOptions = {
  from: '',
  to: '',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  } 
});
