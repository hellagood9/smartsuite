require("dotenv").config();
const mongoose = require("mongoose");

// Models
const Product = require("../../models/Product");
const User = require("../../models/User");

// Data
const dataProducts = require("./data/products");
const dataUsers = require("./data/users");

const config = require("../../config");
const DB_LOCAL = config.MONGODB_URL;

module.exports = {
  syncData: () => {
    return mongoose
      .connect(DB_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        return Product.deleteMany();
      })
      .then(() => {
        const promises = [];
        dataProducts.products.forEach((item) => {
          const promiseToResolve = Product.create(item).catch((err) =>
            console.log(
              "Error while populating DB: item with title",
              item.title
            )
          );
          promises.push(promiseToResolve);
        });

        console.log("Products synchronized successfully!");
        return Promise.all(promises);
      })
      .then(() => {
        return User.deleteMany();
      })
      .then(() => {
        const promises = [];
        dataUsers.users.forEach((item) => {
          const promiseToResolve = User.create(item).catch((err) =>
            console.log("Error while populating DB: item with name", item.name)
          );
          promises.push(promiseToResolve);
        });

        console.log("Users synchronized successfully!");
        return Promise.all(promises);
      })
      .catch((err) => {
        console.log("Error connecting to the DB", err);
      });
  },
};
