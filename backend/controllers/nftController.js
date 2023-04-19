const mongoose = require('mongoose')
const NFT = require('../models/nft')
const Collection = require('../models/collection')

// GET all NFTs in Collection
exports.getAllNFTs = async (req, res) => {
    const CollectionId = req.params.collectionId;


    try {
        const collection = await Collection.findById(CollectionId);

        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }

        res.status(200).json(collection.nfts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// GET a single NFT
exports.getNFT = async (req, res) => {
    const СollectionId = req.params.collectionId;
    const nftId = req.params.nftId;

    try {
        const collection = await Collection.findById(СollectionId);

        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }

        for (let i = 0; i < collection.nfts.length; i++) {
            if (collection.nfts[i]._id == nftId) {
                var nft = collection.nfts[i];
            }
        }
        if (!nft) {
            return res.status(404).json({ message: 'NFT not found' });
        }

        res.status(200).json(nft);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// POST a new NFT
exports.createNFT = async (req, res) => {
    const CollectionId = req.params.collectionId;
    const { number, image } = req.body;

    try {
        const collection = await Collection.findById(CollectionId);

        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }

        const newNFT = new NFT({
            number,
            image,
        });

        collection.nfts.push(newNFT);

        await collection.save();

        res.status(201).json(newNFT);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//DELETE a NFT
exports.deleteNFT = async (req, res) => {
    const СollectionId = req.params.collectionId;
    const nftId = req.params.nftId;
    try {
        const collection = await Collection.findById(СollectionId);

        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }

        for (let i = 0; i < collection.nfts.length; i++) {
            if (collection.nfts[i]._id == nftId) {
                collection.nfts.splice(i, 1);
            }
        }

        await collection.save();

        res.status(200).json({ message: 'NFT deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//UPDATE a NFT
exports.updateNFT = async (req, res) => {
    const СollectionId = req.params.collectionId;
    const nftId = req.params.nftId;
    const { number, image } = req.body;
    try {
        const collection = await Collection.findById(СollectionId);

        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }

        for (let i = 0; i < collection.nfts.length; i++) {
            if (collection.nfts[i]._id == nftId) {
                collection.nfts[i].number = number;
                collection.nfts[i].image = image;
            }
        }

        await collection.save();

        res.status(200).json({ message: 'NFT updated' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

