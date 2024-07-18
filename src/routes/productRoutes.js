const router = require("express").Router();
const Product = require("../Models/Products");

router.get("/product-list/:tag", async (req, res) => {
  try {
    const result = await Product.find({ subCategory: req.params.tag });
    res.send({
      success: true,
      data: result,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (result) {
      res.send({
        success: true,
        data: result,
      });
    } else {
      throw new Error("Invalid Product");
    }
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
