const notes = require("express").Router();
const {
	readFromFile,
	readAndAppend,
	readAndDelete,
} = require("../../helper/fsUtils");
const { v4: uuidv4 } = require("uuid");

notes.get("/", (req, res) => {
	readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
	console.log(req.body);

	const { title, text } = req.body;

	if (req.body) {
		const newNote = {
			title,
			text,
			id: uuidv4(),
		};

		readAndAppend(newNote, "./db/db.json");
		res.json(`New note added!`);
	} else {
		res.errored(`Error in adding note`);
	}
});

notes.delete("/:id", (req, res) => {
	const id = req.url.slice(1);

	readAndDelete(id, "./db/db.json");
	res.json(`Note Deleted`);
});

module.exports = notes;
