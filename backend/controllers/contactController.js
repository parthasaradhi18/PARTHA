const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const submitContactForm = async (req, res) => {
    try {
        const { name, number, message } = req.body;

        // 1. Validation
        if (!name || !number || !message) {
            return res.status(400).json({ error: 'All fields (name, number, message) are required.' });
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(number)) {
            return res.status(400).json({ error: 'Please enter a valid 10-digit Indian phone number.' });
        }

        // 2. Save to database
        const newContact = new Contact({ name, number, message });
        await newContact.save();

        // 3. Send email to admin
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Admin receives the email
            subject: `New Contact Form Submission from ${name}`,
            text: `You have received a new message from your website contact form.\n\nName: ${name}\nPhone Number: ${number}\nMessage: \n${message}`,
            html: `
                <h3>New Contact Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone Number:</strong> ${number}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            try {
                await transporter.sendMail(mailOptions);
                console.log('Admin notification email sent.');
            } catch (emailError) {
                console.error('Error sending email:', emailError);
            }
        } else {
            console.warn('Email credentials not configured. Submission saved to DB but email not sent.');
        }

        return res.status(201).json({ success: true, message: 'Message received successfully. We will contact you via phone.' });
    } catch (error) {
        console.error('Error in submitContactForm:', error);
        return res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
    }
};

module.exports = {
    submitContactForm
};
