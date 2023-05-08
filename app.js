// next step :> create generate all funcation to generate all dice random and but it on array to use in ejs
//

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let faces = 0,
  number = 0;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

let generateAll = (number, faces) => {
  let randoms = [];
  for (let i = 0; i < number; i++) {
    randoms[i] = Math.floor(Math.random() * faces);
  }
  return randoms;
};
// index page
app.get("/", function (req, res) {
  res.render("index");
});
app.post("/response", (req, res) => {
  faces = req.body.faces || 0;
  num_of_dices = req.body.num_of_dices || 0;
  let randoms = [];
  randoms = generateAll(num_of_dices, faces);
  console.log(faces, num_of_dices, randoms);
  res.render("response", { faces, num_of_dices, randoms });
  res.send();
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(8080);
console.log("Server is listening on port 8080");
