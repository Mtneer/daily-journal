/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./journalDataProvider.js"
import { JournalEntryComponent } from "./journalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    let entryHTML = ""

    getEntries().then(() => {
    // Use the journal entry data from the data provider component
        const entries = useJournalEntries()
        console.log(entries)

        entries.forEach(entry => {
            entryLog.innerHTML += JournalEntryComponent(entry)
        })
    })
    console.log(entryLog.innerHTML)

}