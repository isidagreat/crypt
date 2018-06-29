var express = require('express'); //Require the express Module
var app = express(); //Create an express app
const flash = require('express-flash');
app.use(flash());
require('./server/config/mongoose'); //require the use of mongooose
var bodyParser = require('body-parser'); //require the body-parser(to receive data from clients)
app.use(bodyParser.json()); //integrate body parser with our app[
var path = require('path'); //require path
app.use(express.static(path.join(__dirname, './public/dist/public/'))); //Set up static folder directory
const session = require('express-session'); //setup express session to track user login
app.set('trust proxy', 1) //trust first proxy
app.use(session({
    secret:'ultimatesmash',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:60000}
}));
var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
  url: wsuri,
  realm: "realm1"
});
const server = app.listen(1337);
const io = require("socket.io").listen(server);

const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();

poloniex.subscribe('ticker');
poloniex.subscribe('USDT_BTC');

var btcprice= {};
    io.on("connection", function(socket){
poloniex.on('message', (channelName, data, seq) => {
  if (channelName === 'ticker') {
    btcprice['price'] = data
    socket.emit("updated_message", btcprice);
    socket.broadcast.emit("updated_chat", btcprice);
    console.log("Ticker: ",data);
  }

  if (channelName === 'USDT_BTC') {
 
    console.log(`order book and trade updates received for currency pair ${channelName}`);
    console.log(`data sequence number is ${seq}`);
  }
});

poloniex.on('open', () => {
  console.log(`Poloniex WebSocket connection open`);
});

poloniex.on('close', (reason, details) => {
  console.log(`Poloniex WebSocket connection disconnected`);
});

poloniex.on('error', (error) => {
  console.log(`An error has occured`);
});

poloniex.openWebSocket({ version: 2 });
 
connection.onclose = function () {
  console.log("Websocket connection closed");
}
});                    
connection.open();
require('./server/config/routes.js')(app);
app.listen(8000, function(){ //set server to listen on port 8000
    console.log("listening on port 8000");
})
