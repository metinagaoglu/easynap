const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type:String,
        unique: true,
        required: true
    },
    password: {
        type:String,
        required:true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

/**
 * MongoDB Kayıt eklemeden önce araya girer önce burasını çalıştırır.
 */
userSchema.pre('save',function(next) {

    if(!this.isModified('password')) {
        return next()
    }

    bcrypt.hash(this.password,10)
        .then(hash => {
            this.password = hash;
            next();
    });
});

module.exports = mongoose.model('user',userSchema);