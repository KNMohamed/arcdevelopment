const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
const config = functions.config();
const cors = require("cors")({origin: true});
admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: config.user.email,
    password: config.user.password,
    clientId: config.google.clientid,
    clientSecret: config.google.clientsecret,
    refreshToken: config.oauth2.refreshtoken,
    accessToken: config.oauth2.accesstoken,
  },
});

const mailOptions = {
  from: `Arc development <${config.user.email}>`,
  to: "Khalid.N.Mohamed@outlook.com",
  subject: "Testing nodemailer",
  text: "test successful",
  html: "<b>test successful</b>",
};

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) response.send(error);
      else response.send("Message sent successfully");
    });
    transporter.close();
  });
});
