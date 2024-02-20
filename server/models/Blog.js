const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});
module.exports = mongoose.model("Blog", blogSchema);
