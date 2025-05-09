const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) => {
  res.render("index", { userName: "Ahmed Atef" });
  app.listen(port, () => {
    console.log("http://localhost:3001");
  });
});

app.get("/user/add", (req, res) => {
  console.log("*****************");
  res.render("/user/add");
});

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ahmedatef8885:Password12345@cluster0.n8myt.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
