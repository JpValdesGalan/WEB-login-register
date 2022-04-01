const User = require('./user.model');
const ObjectId = require('mongodb').ObjectId;

const userController = {

    getAll: (req, res) => {

        const user = new User();
        user.getAll().then((results) => {
            res.send(results);
        });
    },
    getOne: (req, res) =>{       
        var id = new ObjectId(req.params.id);
        const user = new User();
        user.getOne(id).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    },
    create: (req, res)=>{
        const user = new User();
        user.create(req.body).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(400);
            }
        });
    },
    update: (req, res)=>{
        var id = new ObjectId(req.params.id);
        const user = new User();
        console.log(id);
        console.log(req.body);
        user.update(id, req.body).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    },
    delete: (req, res)=>{
        var id = new ObjectId(req.params.id);
        const user = new User();
        user.delete(id).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    }
};

module.exports = userController;