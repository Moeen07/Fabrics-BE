const Product = require("../models/Product");

//----------Get All Products-----------------------

const allProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
//--------------------------------------------------

//---------Add Product------------------------------

const addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
    });
    await Product.create(newProduct);
    res.send("Product Added Successfully");
  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------

//--------Edit Product--------------------------------

const editProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
    });
    res.send("Product Edited Successfully!");
  } catch (error) {
    console.log(error);
  }
};
//-----------------------------------------------------

//-------Delete Product--------------------------------

const deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
  } catch (error) {
    console.log(error);
  }
};
//-----------------------------------------------------

module.exports = { allProducts, addProduct, editProduct, deleteProduct };
