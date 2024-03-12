const mongoose = require("mongoose");

const Category = mongoose.Schema({
  name: { type: String, required: true, unique: false }
});

module.exports = mongoose.model("Category", Category);
