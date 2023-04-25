const express = require('express')

const router = express.Router()

const Event = require('../models/event')

const { getAllEvents, getEvent, createEvent, deleteEvent } = require('../controllers/eventController')

router.get('/', getAllEvents)

router.get('/:id', getEvent)

// POST a new event
router.post('/:password', createEvent)

//DELETE an event
router.delete('/:id', deleteEvent)