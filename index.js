var request = require("request");

async function xd() {
    var limit = 500;
    var pending = 0;
    var beg = parseInt(Math.random() * 252) + 1;
    for (let i = 1; i < 254; i++) {
        for (let j = 1; j < 254; j++) {
            beg = parseInt(Math.random() * 252) + 1;
            for (let k = 1; k < 254; k++) {
                if(pending < limit) {
                    let options = {
                        method: 'GET',
                        url: 'https://ceapa.cool/suggestions/',
                        qs: {like: '613'},
                        headers: {'x-forwarded-for': "2001:1b8:85a3:813:1319:112e:310:" + beg + "." + i + "." + j + "." + k},
                        followRedirect: false
                    };
                    console.log("s: " + options.headers['x-forwarded-for']);
                    request(options, function (error, response) {
                        pending--;
                        console.log("r: " + options.headers['x-forwarded-for'] + ": " + (error ? error.message : response.statusCode));
                    });
                    pending++;
                }
                await new Promise(resolve => setTimeout(resolve, 1));
            }
        }
    }
}

xd();
