const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    collectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection' },
});

const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;