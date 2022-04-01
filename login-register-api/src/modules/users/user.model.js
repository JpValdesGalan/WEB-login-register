const Model = require('../../core/model');
const jwt = require('jsonwebtoken');

class User extends Model {

    constructor() {
        super('users');
    }

    signInUser(email, password){
        return new Promise((success, reject) =>{
            this.collection.findOne({email: email, password: password}, function(err, result){
                if(err) reject(err);
                else{
                    console.log(result);
                    const token = jwt.sign({email: email, password: password}, 'secretKey', {expiresIn: 60 * 60});
                    success(token);
                }
            })
        })
    }
    
}

module.exports = User;