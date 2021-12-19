const express = require("express");
const app = express();
const port = 3000;

const dotenv = require("dotenv").config();
if (dotenv.error) {
  console.error("Error occurred while setting dot env files : ", dotenv.error);
}
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

app.get("/send-sms", (req, res) => {
  client.messages
    .create({ body: "Hi there", from: phoneNumber, to: "+919898989898" })
    .then((message) => {
      console.log(message.sid);
      res.json({ sid: message.sid }).end();
      return;
    })
    .catch((err) => {
      res.json(error).end();
      return;
    });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
