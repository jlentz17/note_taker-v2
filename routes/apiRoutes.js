const { v4: uuidv4 } = require("uuid");

const notes = require("../db/db.json");

const router = require("express").Router();

const path = require("path");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  // res.json(notes);
  // console.log(uuidv4())
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    const notesData = data;
    res.send(notesData);
    console.log(notesData);
    if (error) {
      console.log(error);
    }
  });
});

router.post("/api/notes", (req, res) => {
    const newNote = { content: req.body, _id: uuidv4() };
  //   notes.push(newNote);
  //   res.json(notes);
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    const notesData = JSON.parse(data);
    console.log(notesData, "before")
    notesData.push(newNote);
    console.log(notesData, "after");
    fs.writeFile("./db/db.json", JSON.stringify(notesData), err => {
        if (err) {
            console.log(err)
        }
    })
  });
});

module.exports = router;
