const express = require('express');
const server = express();
const cors = require("cors");
server.use(express.json());
server.use(cors());


server.get("/search/:word", async (req,res) => {
        const { word } = req.params;
        var request = require('request');
        await request('https://us-central1-web-searcher-293217.cloudfunctions.net/query?word='+word+'&limit=-1', function (error, response, body) {
            if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            return res.send({ error : false , data : info});
            }
    })
    

    
});

server.listen( process.env.PORT || 8000, () => {
   
});