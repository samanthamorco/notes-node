const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    // don't need anything here since write file sync will create the file if it doesn't exist
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  console.log("add note", title, body);
  notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
}

var removeNote = (title) => {
  notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
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