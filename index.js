const express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Archelios:N!5@rg11232@cluster0-becy8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
//app.use('/static', express.static(__dirname+ 'views'))

  
  // perform actions on the collection object
  app.get('/',(req,res)=>{
    console.log(JSON.stringify(req));
    client.connect(err => {
        console.log("Database connected!");
        var collection = client.db("form").collection("user_info");
        collection.find({}).toArray();
        res.sendFile(__dirname + "/views/1.html");
    });
    
  })
  


app.listen(process.env.PORT || 8080,()=>console.log("Hey man!"))
