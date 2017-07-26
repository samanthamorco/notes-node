console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);

var printList = (notes) => {
  console.log("Here are all of your notes: ")
  for (var i = 0; i < notes.length; i++) {
    console.log(`Title: ${notes[i].title}`);
    console.log(`Body: ${notes[i].body}`);
  }
}
if (command === 'add') {
  var note =  notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note Created:")
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Note title already taken.");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  printList(allNotes);
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note removed" : "Note not found."
  console.log(message);
} else {
  console.log("Command not recognized");
}