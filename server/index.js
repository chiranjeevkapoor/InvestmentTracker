const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("helllopo");
});

app.get("/register", (req, res) => {
  res.send("resgitered");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //   res.send(username);
  //   console.log(res);
  console.log(username);
  console.log(password);
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
