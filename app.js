console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();

// fs.appendFile('greetings.txt', `\n Hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log('Unable to write to file!');
//   }
// });

// var res = notes.addNote();
// console.log(res);
// console.log('Result:', notes.add(9,-2));
console.log(_.isString(true));
console.log(_.isString('Sami'));