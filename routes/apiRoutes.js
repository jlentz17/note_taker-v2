const { v4: uuidv4 } = require("uuid");
// Define variables and link files together
// const notes = require("../db/db.json");

const router = require("express").Router();
// To join paths
// const path = require("path");
// To use express method for file read and write
const fs = require("fs");
// Gets notes data
router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    const notesData = JSON.parse(data);
    res.send(notesData);
    console.log(notesData);
    if (error) {
      console.log(error);
    }
  });
});

router.post("/api/notes", (req, res) => {
  const { body } = req;
  console.log(body);
  // const newNote = { body, _id: uuidv4() };
  //   notes.push(newNote);
  //   res.json(notes);
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    const notesData = JSON.parse(data);
    body.id = uuidv4();
    notesData.push(body);
    res.send(notesData);

    fs.writeFile("./db/db.json", JSON.stringify(notesData), error => {
      if (error) {
        console.log(error);
      }
    });
    if (err) {
      console.log(err);
    }
  });
});

router.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  // let notesToKeep;
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    const notesData = JSON.parse(data);
    if (error) {
      console.log(error)
    }
    let notesToKeep = notesData.filter((note) => {
      return note.id !== id;
    });
    console.log(notesData);
    fs.writeFile("./db/db.json", JSON.stringify(notesToKeep), error => {
      if (error) {
        console.log(error);
      }
    });
    res.send(notesToKeep)
  });
});

module.exports = router;
