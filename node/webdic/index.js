const axios = require('axios')

axios.defaults.baseURL = 'http://c.cddm.me:5001';

module.exports = function webdic(word, cb) {
    axios.get(`/word/${word}`)
        .then(function (response) {
            cb(response.data)
        })
        .catch(function (error) {
            console.log(error)
        }) 
}