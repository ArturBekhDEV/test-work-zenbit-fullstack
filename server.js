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

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { nameState, messageState, emailState } = req.body;
  const sqlInsert =
    "INSERT INTO contact_db (name, surname, email) VALUES (?,?,?)";
  db.query(
    sqlInsert,
    [nameState, messageState, emailState],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("result", result);
      }
    }
  );
});

app.get("/", (req, res) => {
  console.log("connected");
});

const PORT = 5000;
app.listen(PORT, () => console.log("server started!"));
