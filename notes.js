const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {

    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) { //If there is no duplicates
        try {
            notes.push({
                title: title,
                body: body
            })
    
            saveNotes(notes)
            console.log(chalk.green.inverse.bold('\nNew %s note added!\n'), title)
        } catch (e) {
            console.log(chalk.red.inverse.bold('\nImpossible to save %s note!\n'), title)
        }
    } else {
        console.log(chalk.yellow.inverse.bold('\nNote Title: %s in use!\n'), title)
    }
}

const rmNote = (title) => { 
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        return console.log(chalk.green.inverse.underline.bold('\nNote %s Removed!\n'), title)
    } else {
        return console.log(chalk.red.inverse.underline.bold('\nNote %s not found!\n'), title)
    }

}

const listNotes = () => {
    const notes = loadNotes()
    
    notes.forEach((note) => {
        console.log(chalk.bold.underline(note.title) + '\n')
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const filterNote = notes.find((note) => note.title === title)
    if (filterNote){
        console.log('\n' + chalk.bold.inverse.blue.underline(filterNote.title) + '\n' + chalk.bold.underline(filterNote.body) + '\n')
    } else {
        console.log(chalk.bold.inverse.red('\nNote not found!\n'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

//Exporting functions
module.exports = {
    addNote: addNote,
    rmNote: rmNote,
    listNotes: listNotes,
    readNote: readNote,
    loadNotes: loadNotes
}