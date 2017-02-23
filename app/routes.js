// app/routes.js

// get the Note models
const Note = require('./models/note.js');

    module.exports = function(app){

        // POST route
        app.post('/api/notes', (req,res) => {
            let note = {
                title: req.body.title,
                body: req.body.body,
                created: new Date(),
                edited: false
            }
            Note.create(note, (err, note) => {
                err ? res.send(err) : res.json(note);
            })
        })

        // GET all route
        app.get('/api/notes', (req,res) => {
            Note.find((err,notes) => {
                err ? res.send(err) : res.json(notes);
            })
        })

        // GET one route
        app.get('/api/notes/:note_id', (req, res) => {
            let id = { _id: req.params.note_id };
            Note.findOne(id, (err, note) => {
                err ? res.send(err) : res.json(note);
            })
        })

        // UPDATE route

        app.put('/api/notes/:note_id', (req, res) => {
            let id = { _id: req.params.note_id };
            let note = {
                title: req.body.title,
                body: req.body.body,
                created: Date.now(),
                edited: true
            }
            Note.findOneAndUpdate(id, note, (err, note) => {
                err ? res.send(err) : res.json(note);
            })
        })

        // DELETE route

        app.delete('/api/notes/:note_id', (req, res) => {
            let id = { _id: req.params.note_id };
            Note.remove(id, (err, note) => {
                err ? res.send(err) : res.send("Note " + id._id + " has been deleted.");
            })
        })

        // frontend routes
        // handles all angular requests
        app.get('*', (req,res) => {
            res.sendFile('./public/views/index.html')
        })

    }
