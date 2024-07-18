const router = require("express").Router();
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../auth");
const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: process.env.SMSAPIKEY,
  apiSecret: process.env.SMSAPISECRET,
});

router.post("/send-otp", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    const otp = Math.floor(Math.random() * (99999999 - 10000 + 1)) + 10000;

    const from = "Eurostore";
    const to = user.phone;
    const text = `Your OTp is ${otp} It will Expire In 10 Min`;

    await vonage.sms
      .send({ to, from, text })
      .then((resp) => {
        console.log("Message sent successfully");
        console.log(resp);
      })
      .catch((err) => {
        console.log("There was an error sending the messages.");
        console.error(err);
      });

    const otpToken = jwt.sign({ otp }, process.env.JWT, {
      expiresIn: "10min",
    });

    await User.findByIdAndUpdate(req.user.userId, {
      token: otpToken,
    });

    res.send({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
