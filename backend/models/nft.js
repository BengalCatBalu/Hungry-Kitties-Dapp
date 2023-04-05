const mongoose = require('mongoose');

// Define the schema
const nftSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    image: {
      type: String,
      required: true,
    },
  });

// Create the model
const NFT = mongoose.model('NFT', nftSchema);

// Export the model
module.exports = NFT