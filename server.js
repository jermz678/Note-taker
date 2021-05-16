const express = require('express');
var uniqid = require('uniqid');
const app = express();
const { notes } = require('./Develop/db/db.json')


app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
    
  });
  console.log(uniqid(), uniqid());