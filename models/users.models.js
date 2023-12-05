const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

  userName:{
    type: String,
    required: true,
    unique: true,
  },
  img:{
    type:String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  following:{
    type: []
  }
});

module.exports=mongoose.model('User',UserSchema)