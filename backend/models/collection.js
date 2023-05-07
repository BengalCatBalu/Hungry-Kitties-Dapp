const mongoose = require('mongoose')

const Schema = mongoose.Schema

const NFT = require('./nft')

const collectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // главное изображение коллекции
    image: {
        type: String,
        required: true
    },

    additional_images: [String],
    totalRaised: {
        type: Number,
        required: true,
        default: 0
    },
    supply: {
        type: Number,
        required: true,
    },
    created: {
        type: Number,
        required: true,
        default: 0,
    },
    shelter_address: {
        type: String,
        required: true,
    },
    collection_object_id: {
        type:String,
        required: true
    },
    ipfs_url: {
        type: String, 
        required: true,
    },
}, { timestamps: true })

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection
