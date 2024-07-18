const router = require("express").Router();
const Item = require("../../Models/CategoryItem");
const authenticateToken = require("../../auth");
const User = require("../../Models/User");
const Product = require("../../Models/Products");

router.get(
  "/get-category-item/:category",
  authenticateToken,
  async (req, res) => {
    try {
      const response = await Item.find({
        categoryName: req.params.category,
      });
      if (!res) {
        throw new Error("No Data Found");
      }
      res.send({
        status: 200,
        success: true,
        data: response,
      });
    } catch (err) {
      res.send({
        success: false,
        message: err.message,
      });
    }
  }
);

router.get("/get-all-users", authenticateToken, async (req, res) => {
  try {
    const response = await User.find().select(`-password -token`);
    res.send({
      success: true,
      data: response,
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

router.put("/update-user", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    if (!user) {
      throw new Error("User Not Found");
    }
    await User.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    res.send({
      success: true,
      message: "Update Success",
    });
  } catch (err) {
    res.send({ success: false, message: err.message });
  }
});
router.post("/add-products", authenticateToken, async (req, res) => {
  try {
    const productExists = await Product.findOne({
      title: req.body.title,
    });
    if (productExists) {
      throw new Error("This Product Already Exists");
    } else {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.send({
        success: true,
        message: "Product Added Successfully",
      });
    }
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.get("/get-all-products", authenticateToken, async (req, res) => {
  try {
    const result = await Product.find();
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

router.delete("/delete-product/:id", authenticateToken, async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (!result) {
      throw new Error("Product Doesn`t Exist");
    }
    res.send({
      success: true,
      message: "Product Delete Successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.get("/get/product/:id", authenticateToken, async (req, res) => {
  const result = await Product.findById(req.params.id);
  try {
    if (!result) {
      throw new Error("Product Not Found");
    }
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

router.put("/products/:id", authenticateToken, async (req, res) => {
  try {
    const result = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: " Update Success",
    });
  } catch (err) {
    res.send({ success: false, message: err.message });
  }
});

module.exports = router;
