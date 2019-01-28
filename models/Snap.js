const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snapSchema = new Schema({
    user_id: {
        type:Schema.ObjectId,
    },
    text: {
        type:String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('snap',snapSchema);