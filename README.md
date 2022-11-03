# Notes App

> A simple Notes App using Node.js

## Installation

This app is built using [**Node.js**](https://nodejs.org/en/download/) make sure you have this installed before running.

Clone `main` branch from this [repo](https://nodejs.org/en/download/).

Access `notes-app` folder:

```bash
    cd notes-app
```

Install the package with its dependencies (You must execute this in `notes-app` folder):

```bash
    npm install
```

## Usage

### Add a Note

To add a note just run the following command:

```bash title="Add a Note"
    node app.js add --title="<your-title>" --body="<note-description>"
    # ! Important ! You have to set title and body, or else it won't add your note
```

### Remove a Note

To remove a note just run the following command:

```bash title="Remove a Note"
    node app.js remove --title="<your-title>"
    # ! Important ! You have to set title or else it won't remove any note
```

### Read a Note

To read a note just run the following command:

```bash title="Remove a Note"
    node app.js remove --title="<your-title>"
    # ! Important ! You have to set title or else it won't display any note
```

### List Notes

To list notes just run the following command:

```bash title="List Notes"
    node app.js list 
    # This will list all your notes stored in notes.json file
```

### Help

To get informations about the app itself, you can always run the following command to check the available options:

```bash title="Check Commands"
    node app.js --help
```

Output should be something like this:

```bash title="Output"
    Commands:
        app.js add     Add a new note
        app.js remove  Removes an existing note
        app.js read    Read an existing note
        app.js list    List notes

    Options:
        --help     Show help                                                 [boolean]
        --version  Show version number                                       [boolean]
```

You can also look inside each argument, `add, remove, list, read` by running the following:

```bash title="Help argument"
    node app.js add --help # change add to remove, list or read to check each argument info
````

Output should be something like this:

```bash title="Help add argument output"
    app.js add

    Add a new note

    Options:
        --help     Show help                                                 [boolean]
        --version  Show version number                                       [boolean]
        --title    Note title                                      [string] [required]
        --body     Note body                                       [string] [required]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
