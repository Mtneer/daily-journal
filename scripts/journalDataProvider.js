/* JournalDataProvider stores the functions that are used to interact with the API */
let journal = []

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/journalEntries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            journal = entries;
            // useJournalEntries(entries)
        })
}