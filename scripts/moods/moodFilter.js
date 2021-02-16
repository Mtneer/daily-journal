import { useMoods, getMoods } from './moodProvider.js'

export const moodFilter = () => {
    getMoods().then(() => {
       const moodFilterTarget = document.querySelector("#entries-filter") 

       let moods = useMoods()
       
        moodFilterTarget.innerHTML = `
        <fieldset>
            <legend>Filter Journal Entries by Mood</legend>
            ${moods.map(mood => {
                return `<input type="radio" id="mood-filter--${mood.id}" name="mood-filter" value="${mood.id}">
                <label for="${mood.id}">${mood.label}</label>`
            }).join("")}
        </fieldset>
        `
    })
}