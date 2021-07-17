const router = require("express").Router();
// define variable for path to be used
const path = require("path");
// get data and send to index.html
// sends response data to notes.html after query
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirName, "../public/index.html"));
});
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirName, "../public/index.html"));
// });

module.exports = router;