const Blog = require("../models/Blog");

//------------Get All Blogs------------------

const allBlogs = async (req, res) => {
  try {
    const data = await Blog.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------

//------------Get Single Blog------------
const singleBlog = async (req, res) => {
  try {
    const blog_id = req.params.id;
    const data = await Blog.findById({ _id: blog_id });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
//-------------------------------------

//------------Add Blog------------
const addBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
    });
    await Blog.create(newBlog);
    res.send("Blog Added successfully!");
  } catch (error) {
    console.log(error);
  }
};
//-------------------------------------

//------------Edit Blog------------
const editBlog = async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
    });
    res.send("Blog edited successfully!");
  } catch (error) {
    console.log(error);
  }
};
//-------------------------------------

//------------Delete Blog------------
const deleteBlog = async (req, res) => {
  try {
    await Blog.deleteOne({ _id: req.params.id });
    res.send("Blog Deleted");
  } catch (error) {
    console.log(error);
  }
};
//-------------------------------------

module.exports = { allBlogs, singleBlog, editBlog, deleteBlog, addBlog };
