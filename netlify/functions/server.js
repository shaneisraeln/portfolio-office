const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Shane Portfolio Server Running'
    });
});

// Handle contact form submission
app.post('/api/send-email', (req, res) => {
    const {
        name,
        company,
        email,
        message
    } = req.body;

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
                    text: `${message}`,
                })
                .then((info) => {
                    console.log({
                        info
                    });
                    res.json({
                        message: 'success'
                    });
                })
                .catch((e) => {
                    console.error(e);
                    res.status(500).json({
                        error: 'Failed to send email'
                    });
                });
        })
        .catch((e) => {
            console.error(e);
            res.status(500).json({
                error: 'Email service unavailable'
            });
        });
});

module.exports.handler = serverless(app);