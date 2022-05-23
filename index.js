const express = require("express");
let session = require("express-session");

let route = require("./src/routes/lesRoutes.js");
let db = require("./src/model/db.js");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use(express.static("public"));

// get et post
app.use(express.json());
app.use(express.urlencoded());

// app.use(
//   session({
//     secret: "fkladjsf9ads08f7391r48fhjeoqr3;fnvhv134789fy3o149hfr34",
//     resave: true,
//     saveUninitialized: true,
//     cookie: { maxAge: 600000 },
//   })
// );

app.use(route); // Must be after PASSPORT

// Server Start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
