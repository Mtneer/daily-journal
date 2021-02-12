import { EntryListComponent } from './entryList.js'
/* JournalDataProvider stores the functions that are used to interact with the API */
let journal = []

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            journal = entries;
            console.log(entries)
        })
}

export const saveJournalEntry = (newEntry) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    })
    .then(EntryListComponent)
}

export const deleteJournalEntry = (entryID) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch(`http://localhost:8088/entries/${entryID}`, {
        method: "DELETE",
    })
    .then(EntryListComponent)
}