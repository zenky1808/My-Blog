const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

let User = mongoose.model('User', Account, 'user');
module.exports = User;