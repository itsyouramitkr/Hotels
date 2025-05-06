const mongoose = require("mongoose");

// define the mongodb connection url
const mongoURL = "mongodb://127.0.0.1:27017/hotels"

//setup mongodb connection

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("connected to mongodb server");
});


db.on("error",(err)=>{
    console.log("error to mongodb server",err);
});


db.on("disconnected",()=>{
    console.log("disconnected to mongodb server");
});

module.exports = db;