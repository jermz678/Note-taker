const express = require('express');
const fs = require('fs');
var uniqid = require('uniqid');
const app = express();
const { notes } = require('./Develop/db/db.json')

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
    
  });
  console.log(uniqid(), uniqid());