
//LOADS DATA
const notesData = require("../db/db.json");
//....file system
const fs = require("fs");

//Routing
console.log("Api route confirmed");
module.exports = function(app) {
    app.get("/api/notes", function (req,res) {
        
        res.json(notesData);
    });

    app.post("/api/notes", function(req,res) {
       console.log("posting");

    })

    app.delete("/api/notes/:id", function(req,res) {
        console.log("deleting");
    })
};