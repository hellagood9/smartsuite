const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

// DB connection
require("./config/db.config");

// Allow *specified origins* to make requests to the API
const whitelist = ["http://localhost:5000", "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};

// Middlewares
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.static(path.join(__dirname, "public"))); //Serves resources from public folder
app.use(morgan("dev"));
app.use(cors(corsOptions));

// Load and mount routes
const routes = require("./routes");
app.use("/api", routes);

const PORT = 5000;

app.listen(5000, () => {
  console.log(`Server running at ${PORT}`);
});
