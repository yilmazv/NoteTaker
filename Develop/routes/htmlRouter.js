const path = require("path");
const router = require("express").Router();
const fs = require("fs");

fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  const parsedNotes = JSON.parse(data);
  router.get("/api/notes", function (req, res) {
    console.log(parsedNotes);
    res.json(parsedNotes);
  });
  router.post("/api/notes", function (req, res) {
    const noteTaken = req.body;
    parsedNotes.push(noteTaken);
    updateDataBase();
    console.log("New note added");
    res.send("Note has been added");
  });
  router.get("/api/notes/:id", function (req, res) {
    res.json(parsedNotes[req.params.id]);
  });
  router.delete("/api/notes/:id", function (req, res) {
    parsedNotes.splice(req.params.id, 1);
    updateDataBase;
  });
  router.get("/notes", function (req, res) {
    console.log("testing endpoint");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  function updateDataBase() {
    fs.writeFile(
      "./Develop/db/db.json",
      JSON.stringify(parsedNotes),
      (writeErr) =>
        writeErr
          ? console.error(writeErr)
          : console.info("Successfully updated!")
    );
  }
});

module.exports = router;
