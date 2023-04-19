const Collection = require('../models/collection')
const mongoose = require('mongoose')

// GET all collections
exports.getAllCollections = async (req, res) => {
    try {
        const collections = await Collection.find()
        res.status(200).json(collections)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

// GET a single collection
exports.getCollection = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout. Check Input ID' })
    }
    try {
        const collection = await Collection.findById(id)
        res.status(200).json(collection)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

// POST a new collection
exports.createCollection = async (req, res) => {
    const { name, description, image, totalRaised, nfts } = req.body
    try {
        const collection = await Collection.create({ name, description, image, totalRaised, nfts})
        res.status(201).json(collection)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// DELETE a collection
exports.deleteCollection = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout. Check input ID' })
    }
    try {
        const collection = await Collection.findByIdAndDelete(id)
        res.status(200).json(collection)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

// UPDATE a collection
exports.updateCollection = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout. Check input ID' })
    }
    const { name, description, image, totalRaised } = req.body
    try {
        const collection = await Collection.findByIdAndUpdate(req.params.id, { name, description, image, totalRaised }, { new: true })
        res.status(200).json(collection)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
