User = require('../models/user.js')
Listing = require('../models/listing.js')
Auction = require('../models/auction.js')
module.exports = {
    listing: function (req, res) {
        console.log("in listing")
        Listing.find({}, (err, _listing) => {
            if (err) {
                // Code...
                console.log("IN ERRORS")
                return (res.json("errs:err"));
            }
            else {
                // Code...
                console.log("IN Success")
                console.log("Success")
                return res.json({ _listing });
            }
        })

    },
    getauction: function (req, res) {
        console.log("in getauction")
        Auction.find({}, (err, _listing) => {
            if (err) {
                // Code...
                console.log("IN ERRORS")
                return (res.json("errs:err"));
            }
            else {
                // Code...
                console.log("IN Success")
                console.log("Success")
                return res.json({ _listing });
            }
        })

    },
    new: function (req, res) {
        console.log("made it to the controller")
        console.log(req.body)
        // Create a a new Quote with the name and age
        var listing = new Listing({
            title: req.body.title,
            lname: req.body.lname,
            description: req.body.description,
            price: req.body.price,
            picture: req.body.url,
            updated_at: new Date(),
            created_at: new Date()
        });
        // Try and save that Listing to the database(this method that actually insets intot the DB)
        listing.save(function (err) {
            if (err) {

                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                    console.log("We have an error!", err.errors[key].message);
                }
                return res.json({ error: err })
            } else {
                console.log("successfully Added Listing");
                res.json({ message: listing });
            }
        });
    },
    newauction: function (req, res) {
        console.log("made it to the controller")
        console.log(req.body)
        // Create a a new Quote with the name and age
        var auction = new Auction({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            picture: req.body.url,
            auctionEnd: req.body.date,
            updated_at: new Date(),
            created_at: new Date()
        });
        // Try and save that Listing to the database(this method that actually insets intot the DB)
        auction.save(function (err) {
            if (err) {

                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                    console.log("We have an error!", err.errors[key].message);
                }
                return res.json({ error: err })
            } else {
                console.log("successfully Added auction Listing");
                res.json({ message: auction });
            }
        });
    },
    onelisting: function(req, res){
        Listing.findOne({_id: req.params.id}, (err, _listing) => {
            if (err) {
                // Code...
                return res.json({error: "notfound"})
            }
            else {
                return res.json({_listing});
                }
        });
    }

}
