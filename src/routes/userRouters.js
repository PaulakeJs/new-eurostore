const router = require("express").Router();
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authenticateToken = require("../auth");

router.post("/new", async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.send({
        success: false,
        message: "This Email is Already Used For Another Account",
      });
    }

    const phoneExist = await User.findOne({ phone }); // Corrected line
    if (phoneExist) {
      return res.send({
        success: false,
        message: "This Number Has Been Used For Another Account",
      });
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      name,
      email,
      phone,
      password: hashPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT, {
      expiresIn: "5hr",
    });

    res.send({
      success: true,
      message: "Account Created SuccessFully",
      data: newUser,
      token,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});
router.get("/getuser", authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId }).select(
      "-password -otp"
    );
    if (!user) {
      return res.send({
        success: false,
        message: "Invalid User",
      });
    }
    res.send({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        success: false,
        message: "Account Not Found",
      });
    }

    
    if (user.status === "Blocked") {
      return res.send({
        success: false,
        message: "Your Account Has Been Disabled",
      });
    }


    const passwordMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordMatch) {
      return res.send({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT);
    res.send({
      success: true,
      data: user,
      token,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
