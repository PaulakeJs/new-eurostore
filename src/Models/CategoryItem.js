const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
  categoryName: { type: String, required: true, trim: true }, // Added trim and required options
  itemName: { type: String, required: true, trim: true }, // Added trim and required options
  itemDescription: { type: String, required: true, trim: true }, // Added trim and required options
  tags: { type: String, required: true, trim: true }, // Added trim and required options
  imageUrl: { type: String, required: true, trim: true }, // Added trim and required options
});

const Item = mongoose.model("Category-Items", ItemSchema);

module.exports = Item;
