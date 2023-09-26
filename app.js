const fs = require("fs");
const os = require("os");
const yargs = require('yargs')
const argv = yargs.argv
const notes = require('./notes')
var command = argv._[0]

if (command === "add") {
    const note = notes.addNotes(argv.title, argv.body)
    if (note) {
       notes.loadNote(note)
    } else {
        console.log('Note created')
    }
} 
else if (command === "list") {
  const lists=  notes.getALl()
 
  if(lists){
    console.log(lists.length)
    lists.map((list)=>{
        notes.loadNote(list)
    })
   

  }
}
 else if (command === "delete") {
    const DeleteNotes = notes.Delete(argv.title)
    const message = DeleteNotes ? "Note Deleted" : "Not  not found"
    console.log(message)

}
 else if (command === 'read') {
    const readNotes = notes.read(argv.title)
    if (readNotes) {
       notes.loadNote(readNotes)

    } else {
        console.log('Note Not found ')
    }

} else {
    console.log('Unknown Command ')
}