const express = require('express')

const router = express.Router()

const NFT = require('../models/nft')

const { getAllNFTs, getNFT, createNFT, deleteNFT, updateNFT } = require('../controllers/nftController')

// GET all NFTs in Collection
router.get('/:collectionId', getAllNFTs)

// GET a single NFT
router.get('/:collectionId/:nftId', getNFT)

// POST a new NFT
router.post('/:collectionId', createNFT)

//DELETE a NFT
router.delete('/:collectionId/:nftId', deleteNFT)

//UPDATE a NFT
router.patch('/:collectionId/:nftId', updateNFT)






module.exports = router