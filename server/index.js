import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3001;


import mysql from "mysql2";
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "INSERT INTO userdata (username, password) VALUES (?,?)",
    [username, password],
    function (err, rows, fields) {
      if (err) throw err;


      res.send(rows);
    }
  );
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "SELECT * FROM userdata WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if(err){
        res.send({err: err});
      }

      if(result.length > 0) {
        res.send(result);
      }
      else{
        res.send({message: "Wrong username/password combination"});
      }
      
    }
  )
   
})


app.listen(3001, () => {
  console.log(`running on port ${port}`);
});










