const mongoose = require('mongoose')
const User = require('../models/user')

// GET all Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// GET a single User
exports.getUser = async (req, res) => {
    const address = req.params.address;

    try {
        const user = await User.findOne({ address: address });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// POST a new User
exports.createUser = async (req, res) => {
    const { address, donated, number_of_hungry_kitties, extra_points } = req.body;

    const user = new User({
        address,
        donated,
        number_of_hungry_kitties,
        extra_points,   
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// DELETE a User
exports.deleteUser = async (req, res) => {
    const address = req.params.address;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.remove();
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// UPDATE a User
exports.updateUser = async (req, res) => {
    const address = req.params.address;

    try {
        const user = await User.findOne({ address: address });
        if (!user) {
            return res.status(404).json({ message: 'User not found',
            addr: address
        });
        }
        if (req.body.address) {
            user.address = req.body.address;
        }
        if (req.body.donated) {
            user.donated = req.body.donated;
        }
        if (req.body.number_of_hungry_kitties) {
            user.number_of_hungry_kitties = req.body.number_of_hungry_kitties;
        }
        if (req.body.extra_points) {
            user.extra_points = req.body.extra_points;
        }
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
