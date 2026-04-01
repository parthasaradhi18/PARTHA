const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    number: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number']
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
