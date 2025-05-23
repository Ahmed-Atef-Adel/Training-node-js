const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extends: true }));
const User = require("./models/userSchema");
var moment = require("moment");
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Connecting with databse:

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

// Get request:

app.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.render("index", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.render("index");
  app.listen(port, () => {
    console.log("http://localhost:3001");
  });
});

app.get("/user/add.html", (req, res) => {
  console.log("*****************");
  res.render("user/add");
});

app.get("/user/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/view", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/edit/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Post request:

app.post("/user/add.html", (req, res) => {
  User.create(req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Put request:

// app.put("/edit/:id", (req, res) => {
//   User.findOneAndUpdate(req.params.id)
//     .then((result) => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.put("/edit/:id", (req, res) => {
  console.log(req.body);
  User.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete request:
