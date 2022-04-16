const fs = require("fs");
const express = require("express");
const path = require("path");
const { Router } = require("express");
const htmlRouters = require("./Develop/routes/htmlRouter");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./Develop/public"));
app.use("/", htmlRouters);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
