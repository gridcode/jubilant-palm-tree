import mongoose from 'mongoose';
import crypto from 'crypto';
mongoose.models = {};
mongoose.modelSchemas = {};
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
    index: true,
    lowercase: true
  },
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: String,
  role: {
    type: String,
    trim: true,
    required: true,
    default: "user"
  }
}, {timestamps: true})

UserSchema.virtual('password')
.set(function(password){
  this._password = password;
  this.salt = this.makeSalt();
  this.hashed_password = this.encryptPassword(password)
})
.get(function(){
  return this._password
})

UserSchema.methods = {
  authenticate: function(plainPassword){
    return this.encryptPassword(plainPassword) === this.hashed_password
  },

  encryptPassword: function(password){
    if(!password) return '';
    try {
      return crypto.createHmac('sha1',this.salt).update(password).digest("hex")
    } catch (error) {
      return ''
    }
  },
  
  makeSalt: function(){
    return Math.round(new Date().valueOf() * Math.random())+''
  }
}

let User = mongoose.model('User', UserSchema)
export default User;