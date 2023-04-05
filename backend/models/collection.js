const mongoose = require('mongoose')

const Schema = mongoose.Schema

const collectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    totalRaised: {
        type: Number,
        required: true,
        default: 0
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    //nfts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }],
}, { timestamps: true })

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection
