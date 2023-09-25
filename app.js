const fs = require("fs");
const os = require("os");
const yargs = require('yargs')
const argv = yargs.argv
const notes = require('./notes')
var command = argv._[0]
console.log("process:", process.argv)
console.log("yargs:", argv)

console.log("command:", command)



if (command === "add") {
    notes.addNotes(argv.title, argv.body)
} else if (command === "list") {
    notes.getALl()
} else if (command === "delete") {
    notes.Delete(argv.title)

} else if (command === 'read') {
    notes.read(argv.title)

} else {
    console.log('Unknown Command ')
}