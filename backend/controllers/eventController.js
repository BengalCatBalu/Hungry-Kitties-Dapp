const Event = require('../models/event')
const mongoose = require('mongoose')
const User = require('../models/user')


exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.status(200).json(events)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

exports.getEvent = async (req, res) => {
    try {
        password = req.params.password
        if (password !== process.env.PASSWORD) {
            return res.status(401).json({ error: 'Unauthorized' });
        }


    }
