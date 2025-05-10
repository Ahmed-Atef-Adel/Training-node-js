const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define The schema (the structure of the article):

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  age: String,
  country: String,
  gender: String,
});

// Creating a model based on that schema:

const User = mongoose.model("User", userSchema);

module.exports = User;
