module.exports = function(app){ 
    const routes = require('../controllers/users.js')
    var path = require("path")
    app.get('/', function(req, res){
        res.sendFile('index');
    });
    app.all('*', (req, res, next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}