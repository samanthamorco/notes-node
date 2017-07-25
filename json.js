const fs = require('fs');
var originalNote = {
  title: "Foo bar",
  body: "Purple hippos are not blue hippos"
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(note);