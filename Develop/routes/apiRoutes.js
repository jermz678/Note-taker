const router = require('express').Router();
const fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');

let notes = require('../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

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

router.delete('/notes/:id', (req, res) => {
    const { id }  = req.params;
    const deletedID = notes.find(notes => notes.id === id);
    if (deletedID){
        notes = notes.filter(notes => notes.id != id);
        res.redirect('/notes')
        res.status(200);
        
    }else{
        res.status(404);
    }
})

module.exports = router;
