function prop(key) {
    return obj => {
        return obj && obj[key]
    }
}

const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
]

console.log(data.map(prop('id')))