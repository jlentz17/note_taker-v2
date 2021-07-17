const router = require("express").Router();
// define variable for path to be used
const path = require("path");
// get data and send to index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirName, "../public/index.html"));
});
// sends response data to notes.html after query
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})


module.exports = router;