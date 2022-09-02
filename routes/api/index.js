const express = require("express");
const notes = require("./notesRoutes");

const app = express();

app.use("/notes", notes);

module.exports = app;
