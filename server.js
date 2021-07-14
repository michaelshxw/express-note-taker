const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// FRONT END DISPLAY

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// BACK END DISPLAY

app.get("/api/notes", (req, res) => {
  // read db.json
  // return saved notes as json
});

app.post("/api/notes", (req, res) => {
  // receive a note to save on the request body
  // add to db.json file
  // return the new note to the client with a unique id using uuid
});

app.delete("/api/notes:id", (req, res) => {
  // receive a query containing the id 
  // read all notes, remove the note with the given id
  // rewrute the notes to the db.json file
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});