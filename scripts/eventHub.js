import { saveJournalEntry, deleteJournalEntry } from './entries/entryDataProvider.js'
import { EntryListComponent } from './entries/entryList.js'

let eventHub = document.querySelector("main")

eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id === "recordEntry") {
        eventObject.preventDefault()
        // Make a new object representation of a note
        const newEntry = {
            date: document.querySelector("#journalDate").value,
            concept: document.querySelector("#concepts").value,
            entry: document.querySelector("#journalEntry").value,
            moodId: parseInt(document.querySelector("#mood").value),
        }

        // Empty the form fields
        document.querySelector("#journalDate").value = ""
        document.querySelector("#concepts").value = ""
        document.querySelector("#journalEntry").value = ""
        document.querySelector("#mood").value = ""

        saveJournalEntry(newEntry) 
    } else if (eventObject.target.id.includes("deleteEntry")) {
        let entryID = parseInt(eventObject.target.id.split("--")[1]);

        deleteJournalEntry(entryID)
    }
})

eventHub.addEventListener("change", (eventObject) => {
    if (eventObject.target.id.includes("mood-filter")) {
        let moodID = parseInt(eventObject.target.id.split("--")[1]);
        
        EntryListComponent(moodID)

    }
})