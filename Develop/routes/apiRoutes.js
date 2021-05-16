const router = require('express').Router();
const fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');
const notes = require('../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
}) 

router.post('/notes', (req, res) => {
    let request = req.body;
    req.body.id = uniqid();
    notes.push(request);
    res.json(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(notes)
    );



})

module.exports = router;
