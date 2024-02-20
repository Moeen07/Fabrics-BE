const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");
const {
  allBlogs,
  addBlog,
  singleBlog,
  deleteBlog,
  editBlog,
} = require("../controllers/blog");

// Get All Blogs
router.get("/", allBlogs);

// Get Single Blog
router.get("/:id", singleBlog);

// Add a Blog
router.post("/add-blog", authMiddleware, addBlog);

// Edit a Blog
router.put("/:id", authMiddleware, editBlog);

// Delete a Blog
router.delete("/:id", authMiddleware, deleteBlog);

module.exports = router;
