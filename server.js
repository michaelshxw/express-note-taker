const http = require('http');
const express = require('express');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/notes.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});