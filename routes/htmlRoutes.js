// Dependencies
const path = require("path");

//Routing

module.exports = function(app){
    app.get("/index.html", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });

    app.get("/notes.html", function(req,res) {
        res.sendFile(path.join(_dirname, "../public/notes.html"));
    });

    console.log("html Routes Confirmed")
};