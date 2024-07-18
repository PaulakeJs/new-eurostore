const router = require("express").Router();
const Item = require("../Models/CategoryItem");
const authenticateToken = require("../auth");

router.post("/add", authenticateToken, async (req, res) => {
  try {
    const itemExist = await Item.findOne({
      itemName: req.body.itemName,
    });
    if (itemExist) {
      throw new Error("Category Item Exist");
    }
    const item = new Item(req.body);
    await item.save();
    res.send({
      success: true,
      message: "New Item Added",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.get("/get/:category", async (req, res) => {
    
  try {
    const result = await Item.find({
        categoryName: req.params.category,
    });
    if (!result) {
      throw new Error("No Items Found");
    }
    res.send({
        success:true,
        data:result
    })
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
