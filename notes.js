const fs = require('fs')

const addNotes = (title, body) => {
    var notes = []
    var note = {
        title,
        body
    }
    try {
        var noteString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(noteString)
    } catch (error) {

    }
    var duplicateNotes= notes.filter((note)=>note.title===title)
    if(duplicateNotes.length===0){
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    }
   




}

const getALl = () => {
    console.log('Getting ALl Notes')
}
const Delete = (title) => {
    console.log("Deleting Notes" + title)
}
const read = (title) => {
    console.log("read all notes " + title)
}
module.exports = {
    addNotes,
    read,
    Delete,
    getALl
}