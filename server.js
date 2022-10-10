const express = require("express");

const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ArturData1!",
  database: "form_contact",
});

const PORT = 5000;

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO contact_db (name, surname, email) VALUES ('artur', 'bekh', 'artbekh@gmail.com')";

  db.query(sqlInsert, (err, result) => {
    res.send("hello its test new");
    console.log("error", err);
    console.log("result", result);
  });
});

app.listen(PORT, () => console.log("server started!"));
