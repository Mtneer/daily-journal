


eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id === "recordEntry") {
        console.log(eventObject.target.id)
        eventObject.preventDefault()
        // Make a new object representation of a note
        const newNote = {
            date: eventObject.target.form[1].value,
            suspect: eventObject.target.form[2].value,
            note: eventObject.target.form[3].value
        }
        console.log(newNote)

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    } 
})