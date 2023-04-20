const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    address: {type: String, required: true, unique: true},
    donated: {type: Number, required: true},
    number_of_hungry_kitties: {type: Number, required: true},
    extra_points: {type: Number, required: true},
});

const User = mongoose.model('User', userSchema);

module.exports = User