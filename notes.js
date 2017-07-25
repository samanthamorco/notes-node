const fs = require('fs');

var addNote = (title, body) => {
  console.log("add note", title, body);
  var notes = [];
  var note = {
    title: title,
    body: body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    // don't need anything here since write file sync will create the file if it doesn't exist
  }

  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log("all notes...");
}

var removeNote = (title) => {
  console.log("removing note with a title of...", title)
}

var readNote = (title) => {
  console.log("reading note with a title of", title)
}

module.exports = {
  addNote,
  getAll: getAll,
  removeNote,
  readNote
  // two ways to do this syntax
}