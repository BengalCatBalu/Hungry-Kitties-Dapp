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
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Event. Check Input ID' })
    }
    try {
        const event = await Event.findById(id)
        res.status(200).json(event)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

exports.createEvent = async (req, res) => {
    try {
        password = req.params.password
        if (password !== process.env.PASSWORD) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const winners = await chooseWinners();
        const event = await Event.create({ winners })
        res.status(201).json(event)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such event. Check input ID' })
    }
    try {
        const event = await Event.findByIdAndDelete(id)
        res.status(200).json(event)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

async function chooseWinners() {
    const users = await User.find();
  
    const totalScore = users.reduce((acc, user) => acc + user.donated * 10 + user.number_of_hungry_kitties * 5 + user.extra_points, 0);
  
    const winProbabilities = users.map(user => user.score / totalScore);
  
    const winners = [];
    const numWinners = 10;
    if (users.length < numWinners) {
        numWinners = 1;
    }
    while (winners.length < numWinners) {
      let rand = Math.random();
      for (let i = 0; i < winProbabilities.length; i++) {
        rand -= winProbabilities[i];
        if (rand < 0) {
          winners.push(users[i]);
          break;
        }
      }
    }
    return winners;
  }

    
