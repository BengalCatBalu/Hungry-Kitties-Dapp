const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new mongoose.Schema({
    winners: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true })