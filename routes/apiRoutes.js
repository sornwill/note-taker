
//LOADS DATA
let notesData = require("../db/db.json");
const path = require("path");
const OUTPUT_DIR = require("../db/save.js");
const outputPath = path.join(OUTPUT_DIR(),"db.json");
//....file system
const fs = require("fs");

//Routing

module.exports = function(app) {


    app.get("/api/notes", function (req,res) {
        
        let ln = notesData.length;
        for (let i = 0; i < ln;i++){
            notesData[i].id = i+1;
        }
        res.json(notesData);
    });


    app.post("/api/notes", function(req,res) {

        notesData.push(req.body);
        res.json(notesData);
        fs.writeFile(outputPath, JSON.stringify(notesData), function (err){
            if(err) throw err;
        });
        // console.log("post");
    });


    app.delete("/api/notes/:id", function(req,res) {
        const uniqueID = req.params.id;

        res.json(false);

        let removeNotes = [];
        for(let i = 0; i < notesData.length; i++){
            if(notesData[i].id != uniqueID) {
                removeNotes.push(notesData[i]);
            }
           
        }
            
        fs.writeFile(outputPath, JSON.stringify(removeNotes), function (err){
            if(err) throw err;
        });
        // console.log("delete");
    })
};