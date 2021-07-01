require("dotenv").config();

// Connect DB
const { dbConnect } = require("./configs/dbConnect");
dbConnect();

// Import modules
const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const helmet = require("helmet");


// Import middlewares
const { ErrorHandler } = require("./middlewares/ErrorHandler");

// Import routes
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const reviewRoute = require("./routes/reviewRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");

// Initialize App
const app = express();

// Middlwares
app.use(helmet());

app.use(cors({ origin: "https://onlinecamstore.herokuapp.com/" }));

app.use((req, res, next) => {
  if (req.originalUrl === "/api/v1/orders/webhook") {
    next();
  } else {
    express.json({ limit: "10MB" })(req, res, next);
  }
});

// Session object
const sess = {
  secret: "secret_cart",
  name: "cart_sid",
  resave: false,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URI,
    collectionName: "sessions",
  }),
  saveUninitialized: true,
  cookie: {},
};

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/cart", session(sess), cartRoute);
app.use("/api/v1/orders", orderRoute);

// Error Handling
app.use(ErrorHandler);

// Check if in production mode
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies

  const pathToFolder = path.join(__dirname, "../client/build");
  const pathToHtmlFile = path.join(__dirname, "../client/build/index.html");

  app.use(express.static(pathToFolder));

  app.get("*", (req, res) => {
    res.sendFile(pathToHtmlFile);
  });
}

// Listen Server
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
