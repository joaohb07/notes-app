const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// add, remove, read, list
// Create add command
yargs.command({
    command: 'add', // command arg
    describe: 'Add a new note', // command description
    builder: { // builds the options --title and --body, both required
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { // What it does when node app.js add runs
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes an existing note',
    builder: { // builds the options --title, required
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const removed = notes.rmNote(argv.title)
        if(removed){
            console.log(chalk.green.inverse.underline.bold('\nNote %s Removed!\n'), argv.title)
        } else {
            console.log(chalk.red.inverse.underline.bold('\nNote %s not found!\n'), argv.title)
        }
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read an existing note',
    builder: { // builds the options --title, required
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        console.log(chalk.yellow.bold('\n----------------------------------------------Notes List----------------------------------------------\n'))
        notes.listNotes()
        console.log(chalk.yellow.bold('\n------------------------------------------------------------------------------------------------------\n'))
    }
})

yargs.parse()