const mongoose = require("mongoose");

const descriptionSchema = new mongoose.Schema({
  work: {
    type: String,
  },
  material: {
    type: String,
  },
});

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: descriptionSchema,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  category: {
    type: String,
    enum: ["Bags", "Suits", "Runners", "Mats"],
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
