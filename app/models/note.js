// app/models/notes.js

// get the mongoose module
const mongoose = require('mongoose');

// define the note models
module.exports = mongoose.model('Note', {
    title: { type: String, default: "New Note"},
    body: { type: String, default: "New Body"},
    created: { type: Date, default: Date.now()},
    edited: { type: Boolean, defualt: false}
})
