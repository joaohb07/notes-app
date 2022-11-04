var expect = require("chai").expect
var notesScript = require("../notes")
var assert = require('assert')

describe("loadNotes()", function() {
    it("Load notes reusable function",() => {
        var notes = notesScript.loadNotes() // Load notes
        assert(notes) // assert notes.json return
    })
})

describe("addNote()", function() {
    it("Adds a note to notes.json",() => {
        notesScript.addNote('Test','b') // Add note test
        var notes = notesScript.loadNotes() // Load notes
        const filterNote = notes.find((note) => note.title === "Test")
        var expected = { // expected return
            body: 'b',
            title: 'Test'
        }
        assert.deepStrictEqual(filterNote, expected);
        notesScript.rmNote('Test') // Remove note after execution
    }),
    it("Fails to add note to notes.json", () => {
        expect(notesScript.addNote()).to.be.an('undefined') // Expects to add none
        notesScript.rmNote()
    }),
    it("Finds a Duplicate Note", () => {
        notesScript.addNote("Test", "")
        expect(notesScript.addNote("Test", "")).to.be.an('undefined') // Expects duplicate
        notesScript.rmNote('Test') // Remove note after execution
    })
})

describe("rmNote()", function() {
    it("Removes a note from notes.json",() => {
        notesScript.addNote('Test','b') // Add note test
        notesScript.rmNote('Test') // Remove note after adding
        var notes = notesScript.loadNotes() // Load notes
        const filterNote = notes.find((note) => note.title === "Test") // Searches for Test note
        assert.deepStrictEqual(filterNote, undefined); // Assert nothing is found
    }),
    it("Fails to remove a note from notes.json", () => {
        expect(notesScript.rmNote()).to.be.an('undefined') //Does not find it
    })
})


describe("listNotes()", function() {
    it("List Notes",() => {
        var notes = notesScript.loadNotes() // Load notes
        assert(notes) // assert notes.json return
    })
})

describe("readNotes()", function() {
    it("Read Notes",() => {
        notesScript.addNote('Test','Testing Note') // Add note test
        expect(notesScript.readNote('Test')).to.be.an('undefined') //It does return nothing
        //It will print Test note
        notesScript.rmNote('Test') // Remove note after execution
    }),
    it("Fails to Find Note",() => {
        expect(notesScript.readNote('Test')).to.be.an('undefined') //It does return nothing 
        //It will print Note not found
    })
})