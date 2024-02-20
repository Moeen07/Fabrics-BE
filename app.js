require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const app = express();

const connectDB = require("./server/config/db");

// Import Routes
const productRoutes = require("./server/routes/product");
const blogRoutes = require("./server/routes/blog");
const adminRoutes = require("./server/routes/admin");

// Connect to Database
connectDB();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);

//Routes
app.get("/", (req, res) => {
  res.send("This is home");
});

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
