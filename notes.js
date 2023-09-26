const fs = require('fs')

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json')
        return JSON.parse(noteString)
    } catch (error) {
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))


}
const addNotes = (title, body) => {
    var notes = fetchNotes()
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

const getALl = () => {
    const lists = fetchNotes()
    
    return lists
}
const Delete = (title) => {
    const notes = fetchNotes()
    const filterNotes = notes.filter((note) => note.title !== title)
    saveNotes(filterNotes)
    return notes.length !== filterNotes.length
}
const read = (title) => {
    const Notes = fetchNotes()
    const filterNote = Notes.filter((note) => note.title === title)
    return filterNote[0]
}

var loadNote = (note) => {
    console.log(note.title)
    console.log(note.body)
}
module.exports = {
    addNotes,
    read,
    Delete,
    getALl,
    loadNote
}