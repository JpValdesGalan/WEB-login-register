const Database = require('./database');
const { ObjectId } = require('mongodb');

class Model {

    colection;

    constructor(collectionName) {
        this.collection = Database.collection(collectionName);
    }

    getAll(){
        return new Promise((accept, reject) =>{
            this.collection.find().toArray((err, results) =>{
                if(err) reject(err);
                else accept(results);
            });
        })
    }

    getOne(id){
        return new Promise((accept, reject) =>{
            this.collection.find({_id: id}).toArray((err, result) =>{
                if(err) reject(err);
                else accept(result);
            });
        })
    }

    create(body){
        return new Promise((accept, reject) =>{
            try{
                this.collection.insertOne(body)
                accept('User succesfully added');
            }catch(e){
                reject(e)
            }
        })
    }

    update(id, jsonBody){
        return new Promise((accept, reject) =>{
            try{
                this.collection.updateOne({_id: id}, { $set: jsonBody}, {upsert: true})
                accept('User with id '+id+' was succesfully updated');
            }catch(e){
                reject(e);
            }
        })
    }

    delete(id){
        return new Promise((accept, reject) =>{
            try{
                this.collection.remove({_id: id});
                accept('User succesfully deleted!');
            }catch(e){
                reject(e)
            }
        })
    }
}

module.exports = Model;