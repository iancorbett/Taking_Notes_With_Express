const express = require('express');

const notes = require('./db/db.json');

const path = require('path');

const fs = require('fs');

const {v4: uuidv4} = require('uuid');

const app = express();

const PORT = 3001;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Navigate to /notes or /index'));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(notes)
});

app.post('/api/notes', (req, res) => {
    console.log(`${req.method} request was recieved to add a note!`);
    console.log(req.body);
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        notes.push(newNote);

        fs.writeFile(`./db/db.json`, JSON.stringify(notes), (err) => 
            err? console.log(err) : console.log('Successfully Added!')
        );

        const response = {
            status: 'success',
            body: newNote,
        };
        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error in posting note!')
     }

     
     
});

app.listen(PORT, () => {
    console.log(`Application is listening at http://localhost:${PORT}`)
});