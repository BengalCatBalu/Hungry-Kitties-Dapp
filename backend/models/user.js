const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    address: {type: String, required: true, unique: true},
    donated: {type: Number, required: true, default: 0},
    number_of_hungry_kitties: {type: Number, required: true, default: 0},
    extra_points: {type: Number, required: true, default: 0},
});

const User = mongoose.model('User', userSchema);

module.exports = User