
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
};