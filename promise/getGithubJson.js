function get(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

var rawurl = 'https://raw.githubusercontent.com/googlesamples/web-fundamentals/gh-pages/fundamentals/primers/story.json'
var url = 'https://raw.github.com/googlesamples/web-fundamentals/blob/gh-pages/fundamentals/primers/story.json'

get(rawurl).then(function (response) {
    return JSON.parse(response);
}).then(function (response) {
    console.log("Yey JSON!", response);
})