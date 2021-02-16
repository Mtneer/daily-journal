/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./entryDataProvider.js"
import { JournalEntryComponent } from "./entry.js"


// DOM reference to where all entries will be rendered
const entryLogTarget = document.querySelector("#entryLog")

export const EntryListComponent = (moodID) => {
    entryLogTarget.innerHTML = " "
    getEntries().then(() => {
    // Use the journal entry data from the data provider component
        let entries = useJournalEntries()
        
        if (typeof(moodID) !== "undefined") {
            entries = entries.filter(entry => entry.moodId === moodID)
        }
        
        entryLogTarget.innerHTML += entries.map(entry => JournalEntryComponent(entry)).join("")
    })
}