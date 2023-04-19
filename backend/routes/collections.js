const express = require('express')

const router = express.Router()

const Collection = require('../models/collection')

const { getAllCollections, getCollection, createCollection, deleteCollection, updateCollection } = require('../controllers/collectionController')

router.get('/', getAllCollections)

router.get('/:id', getCollection)

// POST a new collection
router.post('/', createCollection)

//DELETE a collection
router.delete('/:id', deleteCollection)

//UPDATE a collection
router.patch('/:id', updateCollection)


module.exports = router