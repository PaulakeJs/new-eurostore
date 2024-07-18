const router = require("express").Router();
const Cart = require("../Models/cartModel");
const mongoose = require("mongoose")

router.post("/new", async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.body.id);
  try {
    const itemExist = await Cart.findOne({
      id,
      email: req.body.email,
    });
    if (!itemExist) {
      const newCartItem = new Cart(req.body);
      await newCartItem.save();
      res.send({
        success: true,
        message: "Added To Cart",
      });
    } else {
      throw new Error("Item Already In Cart");
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.meessage,
    });
  }
});

module.exports = router;
