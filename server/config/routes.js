module.exports = function(app){ 
    const routes = require('../controllers/users.js')
    var path = require("path")
    app.get('/', function(req, res){
         console.log("made it to the routes ======================")
        routes.listing(req,res);
    });
    app.post('/api/new/listing', function(req, res){
        console.log("made it to the routes ======================")
        routes.new(req,res);
    });
    app.post('/api/new/auction', function(req, res){
        console.log("made it to the routes ======================")
        routes.newauction(req,res);
    });
    app.get('/api/listings/auction', function(req, res){
        console.log("made it to the routes ======================")
        routes.getauction(req,res);
    });
    app.get('/api/listings', function(req, res){
        console.log("made it to the routes ======================")
        routes.listing(req,res);
    });
    app.get('/api/listing/:id', function(req, res){
        console.log("made it to the routes ======================")
        routes.onelisting(req,res);
    });
    app.all('*', (req, res, next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}