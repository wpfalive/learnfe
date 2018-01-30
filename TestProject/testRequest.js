var request = require('request')
console.log(1)
request('https://www.baidu.com', function(error, response, body) {
	if(!error && response.statusCode == 200) {
		console.log(body)
	}
});
