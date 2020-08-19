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

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log("Error connecting to the DB", error);
  }
};

const dropCollection = async (collection) => {
  const collectionName = collection.collection.collectionName;
  try {
    console.log(`Removing all documents from "${collectionName}" collection`);
    await collection.deleteMany();
  } catch (error) {
    console.log(
      `Error when trying to delete the collection "${collectionName}"`,
      error
    );
  }
};

const checkCollectionExist = async (collection, data, dataPropForErrorInfo) => {
  try {
    const collectionName = collection.collection.collectionName;
    const isCollectionExists = await collection.find({});

    if (!isCollectionExists.length) {
      console.log(
        `Collection "${collection.collection.collectionName}" does not exist`
      );

      populateCollection(collection, data, dataPropForErrorInfo);
    } else {
      console.log(`Collection "${collectionName}" exist`);
    }
  } catch (error) {
    const collectionName = collection.collection.collectionName;
    console.log(
      `Error checking if the collection "${collectionName}" exists`,
      error
    );
  }
};

const populateCollection = (collection, data, dataPropForErrorInfo) => {
  const collectionName = collection.collection.collectionName;
  const promises = [];
  try {
    data.forEach((item) => {
      const promiseToResolve = collection.create(item);
      promises.push(promiseToResolve);
    });

    console.log(`Collection "${collectionName}" successfully seeded!`);
    return Promise.all(promises);
  } catch (error) {
    console.log(
      "Error while populating DB: item =>",
      item[dataPropForErrorInfo]
    );
  }
};

module.exports = {
  syncData: async () => {
    try {
      const connection = await connectToDB();

      const checkProductCollectionExists = checkCollectionExist(
        Product,
        dataProducts.products,
        "title"
      );

      const checkUserCollectionExists = checkCollectionExist(
        User,
        dataUsers.users,
        "name"
      );
    } catch (error) {
      console.log("Oop... Something went wrong!", error);
    }
  },
};
