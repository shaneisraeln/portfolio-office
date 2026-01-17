const express = require('express');
const path = require('path');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 8080;
const isProduction = process.env.NODE_ENV === 'production';

// Security and performance middleware
app.use(cors({
    origin: isProduction ? ['https://shaneisrael.vercel.app', 'https://shaneisrael.netlify.app'] : true,
    credentials: true
}));
app.use(compression());

// Security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    if (isProduction) {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }
    next();
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Health check endpoint for deployment platforms
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Shane Portfolio Server Running' });
});

// Handle contact form submission
app.post('/api/send-email', (req, res) => {
    const { name, company, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            error: 'Missing required fields',
            message: 'Name, email, and message are required' 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: 'Invalid email format',
            message: 'Please provide a valid email address' 
        });
    }

    // Check if email is configured
    if (!process.env.FOLIO_EMAIL || !process.env.FOLIO_PASSWORD) {
        return res.status(503).json({ 
            error: 'Email service not configured',
            message: 'Contact form is temporarily unavailable' 
        });
    }

    const transporter = nodemailer.createTransporter({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.FOLIO_EMAIL,
            pass: process.env.FOLIO_PASSWORD,
        },
    });

    transporter
        .verify()
        .then(() => {
            transporter
                .sendMail({
                    from: `"${name}" <${process.env.FOLIO_EMAIL}>`,
                    to: 'shaneisrael2006@gmail.com',
                    subject: `Portfolio Contact: ${name} <${email}> ${company ? `from ${company}` : ''}`,
                    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not specified'}\n\nMessage:\n${message}`,
                    html: `
                        <h3>New Portfolio Contact</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
                        <h4>Message:</h4>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    `,
                })
                .then((info) => {
                    console.log('Email sent successfully:', info.messageId);
                    res.json({ message: 'Email sent successfully' });
                })
                .catch((e) => {
                    console.error('Failed to send email:', e);
                    res.status(500).json({ error: 'Failed to send email' });
                });
        })
        .catch((e) => {
            console.error('Email service verification failed:', e);
            res.status(500).json({ error: 'Email service unavailable' });
        });
});

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

// listen to app on port
app.listen(port, () => {
    console.log(`🚀 Shane's Portfolio Server is running on port ${port}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📧 Email service: ${process.env.FOLIO_EMAIL ? 'Configured' : 'Not configured'}`);
});