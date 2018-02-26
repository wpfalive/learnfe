/* eslint-disable */
// eslint-disable-next-line
const STORAGE_KEY = 'todos-vuejs'
export default {
    // fetch: function() {}
    fetch() {
        return JSON.parse(window.localStorage.getItem(
            STORAGE_KEY) || '[]')
    },
    save (items) {
        console.log(items)
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(
            items))
    }
}