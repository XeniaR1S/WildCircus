const connection = require('./config/conf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;



// ----------------------------------------------------------------- POST RESERVATION

app.post('/reservation', (req, res) => {
  const {date, hour, lastname, firstname}  = req.body
  });
  formData = {date, hour, lastname, firstname};

    connection.query('INSERT INTO reservation (date, hour, lastname, firstname) VALUES (?,?,?,?)', [formData.date, formData.hour, formData.lastname, formData.firstname], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error of reservation ! :/");
    } else {
      res.sendStatus(200);
    }
  });

