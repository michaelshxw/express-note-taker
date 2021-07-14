const http = require('http');
const express = require('express');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const notes = require("./db/db.json")

const handleRequest = (request, response) => {
  response.end(`It Works!! Path Hit: ${request.url}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
