const mongoose  = require('mongoose')
const Schema    = mongoose.Schema;
const bcrypt = require('bcrypt');

const addUsers = new Schema({
    nomeUser: {type: String, required: true},
    emailUser: {type: String, required: true},
    senhaUser: {type: String, required: true},
    
    
},{
    timestamps: true
})

addUsers.pre('save', function(next){
    if(!this.isModified("senhaUser")){
        return next();
         
    }
    this.senhaUser = bcrypt.hashSync(this.senhaUser,10);
});
const CadUser = mongoose.model("CadUser", addUsers);
module.exports = CadUser;