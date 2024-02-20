const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");
const {
  allProducts,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product");

// View All Products
router.get("/", allProducts);

// Add Product
router.post("/add-product", authMiddleware, addProduct);

// Edit Product
router.put("/:id", authMiddleware, editProduct);

// Delete Product
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
