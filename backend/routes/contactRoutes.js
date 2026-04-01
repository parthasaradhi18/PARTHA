const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');
const rateLimit = require('express-rate-limit');

// Rate limiting middleware for this route
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 5, // Limit each IP to 5 requests per windowMs
    message: { error: 'Too many submissions from this IP, please try again after 15 minutes.' },
    standardHeaders: true, 
    legacyHeaders: false, 
});

// POST /api/contact
router.post('/', contactLimiter, submitContactForm);

module.exports = router;
