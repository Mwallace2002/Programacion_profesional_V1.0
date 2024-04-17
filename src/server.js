const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://maxwallace2002:Grupo420@tics420.gun3p4m.mongodb.net/?retryWrites=true&w=majority&appName=TICS420", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Item = require("./models/Item"); // Create the Item model

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
