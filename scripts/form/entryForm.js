import { moodOptions } from '../moods/moodSelector.js'

const formTarget = document.querySelector("#form-container")

export const entryForm = () => {
    formTarget.innerHTML = `
        <form>
            <div class="mb-3">
                <label for="journalDate" class="form-label">Date of Entry</label>
                <input type="date" class="form-control" name="journalDate" id="journalDate">
            </div>
            <div class="mb-3">              
                <label for="concepts" class="form-label">Concepts Covered</label>
                <input type="text" class="form-control" id="concepts">
            </div>
            <div class="mb-3">              
                <label for="journalEntry" class="form-label">Journal Entry</label>
                <textarea name="journalEntry" class="form-control" id="journalEntry" cols="30" rows="10"></textarea>
            </div>
            <div class="mb-3">
                <!-- Mood Selector -->
                <label for="mood" class="form-label">Mood</label>
                <select name="Mood" id="mood">
                
                </select>
            </div>
            <!-- Record Entry Button -->
            <button type="submit" class="btn btn-primary btn-sm" id="recordEntry">Submit Entry</button>
        </form>
        `
        moodOptions()
}

