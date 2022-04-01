const { MongoClient } = require('mongodb');
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;
let database;

module.exports = {
    connect: () => {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(mongoUrl, { useUnifiedTopology: true}, (err, client) =>{
                if(err){
                    console.log("something failed", err);
                    reject();
                }else{
                    database = client.db();
                    console.log("Connected Succesfully");
                    resolve();
                }
            });
        }) 
    },
    collection: (collectionName) =>{
        return database.collection(collectionName);
    }
}