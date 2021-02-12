import { useMoods, getMoods } from './moodProvider.js'


export const moodOptions = () => {
    
    getMoods().then(() => {
        const moodSelectorTarget = document.querySelector("#mood")

        let moods = useMoods()

        moodSelectorTarget.innerHTML = `<option value='0'>Select a mood</option>
        ${
            moods.map(mood => {
                return `<option value="${mood.id}">${mood.label}</option>`}).join("")
        }
        `
    })
}