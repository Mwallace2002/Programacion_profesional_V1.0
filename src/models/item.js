const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Prueba.usuarios", itemSchema);