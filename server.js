const express = require("express");
const path = require("path");
const api = require("./routes/api/index");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/notes", (req, res) =>
	res.sendFile(path.join(__dirname, "notes.html"))
);
