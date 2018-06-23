Pet= require('../models/user.js')
module.exports = {
new: function (req , res){
    console.log("made it to the controller")
    console.log(req.body)
    // Create a a new Quote with the name and age
    var user = new Pet({
        name: req.body.name,
        type: req.body.type,
        description:req.body.description, 
        skills:{
        skillone:req.body.skillone,
        skilltwo:req.body.skilltwo,
        skillthree:req.body.skillthree,
        }, 
        updated_at: new Date(), 
        created_at: new Date()
    });
    // Try and save that user to the database(this method that actually insets intot the DB)
    user.save(function(err){
        if(err){
            
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
                console.log("We have an error!", err.errors[key].message);
            }
            return res.json({error: err})
        } else{
            console.log("successfully Added Pet to Shelter");
            res.json({message:user});
        }
    });
}
}
