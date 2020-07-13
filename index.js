var request = require("request");

async function xd() {
    var limit = 100;
    var pending = 0;
    var iii = 0;
    var beg = parseInt(Math.random() * 252) + 1;
    var xd_xd = 6;
    for (let i = 1; i < 254; i++) {
        if (i == 250) { xd_xd++; i = 1; }
        for (let j = 1; j < 254; j++) {
            beg = parseInt(Math.random() * 252) + 1;
            for (let k = 1; k < 254; k++) {
                if(pending < limit) {
                    iii++;
                    let options = {
                        method: 'POST',
                        url: 'https://jbzd.com.pl/content/vote/1226483',
                        body: {for: 1},
                        json: true,
                        headers: {'content-type': 'application/json'/*, 'x-forwarded-for': /*lir[iii % lir.length] + ":" +*/ /*xd_xd + "." + i + "." + j + "." + k*/},
                        followRedirect: false,
                        proxy: "185.229.236.193:8080"
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
