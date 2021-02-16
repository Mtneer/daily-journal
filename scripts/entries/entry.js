/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p><i><strong>${entry.date}</strong></i></p>
            <p><i>${entry.concept}</i></p>
            <p>${entry.entry}</p>
            <p>${entry.mood.label}</p>
            <button type="submit" class="btn btn-primary btn-sm" id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `
}