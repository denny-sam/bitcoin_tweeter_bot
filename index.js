var twit = require('twit');
var axios = require('axios')
var http = require('http')

var T = new twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});

tweetIt = (inr, usd, gbp, eur) => {
    T.post('statuses/update', { status: `1 BTC is \n INR   ${inr} or\n USD   ${usd} or\n GBP   ${gbp} or\n EUR   ${eur}\n\n #Bitcoin #BitcoinPrice` }, function (err, data, response) {
        console.log(data)
    })
}

getRate = () => {
    var re = /([0-9]*\,*)*/
    var usd, inr, gbp, eur = 0;
    base_url = "https://api.coindesk.com/v1/bpi/currentprice/"

    axios.get(base_url+"INR.json")
        .then((resp) => {
            usd = re.exec(resp.data.bpi.USD.rate)[0];
            inr = re.exec(resp.data.bpi.INR.rate)[0];
            axios.get(base_url+"GBP.json")
                .then((resp) => {
                    gbp = re.exec(resp.data.bpi.GBP.rate)[0];
                    axios.get(base_url+"EUR.json")
                        .then((resp) => {
                            eur = re.exec(resp.data.bpi.EUR.rate)[0];
                            tweetIt(inr, usd, gbp, eur)
                        })
                })
        })
}

getRate();
setInterval(getRate, 18000000);

const server = http.createServer((req, res) => {
    res.end();
});
server.listen(5000)




