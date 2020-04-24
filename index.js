const express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Archelios:N!5@rg11232@cluster0-becy8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
app.use('/static', express.static(__dirname+ 'views'))
client.connect(err => {
  
  // perform actions on the collection object
  app.use('/',(req,res)=>{
    var collection = mongodb.db("form").collection("user_info");
    console.log(req);
    collection.insertOne(req);
    res.sendFile(__dirname + "/views/1.html");
  })
  client.close();
});
