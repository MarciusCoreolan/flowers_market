const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://fenrir:090667@cluster0.dwhe0.mongodb.net/flowers"
    );
    app.listen(PORT, () => {
      console.log("Server has been started");
    });
  } catch (e) {
    console.log(e);
  }
}
start();
