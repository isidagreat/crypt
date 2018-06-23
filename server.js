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
require('./server/config/routes.js')(app);
app.listen(8000, function(){ //set server to listen on port 8000
    console.log("listening on port 8000");
})
