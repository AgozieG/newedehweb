import express from 'express'
import multer from 'multer'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')))

// Configure multer for file uploads (memory storage)
const storage = multer.memoryStorage()
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow common file types
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'text/plain',
      'application/zip',
      'application/x-zip-compressed',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'text/csv',
      'application/rtf'
    ]
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error(`Invalid file type: ${file.mimetype}. Only common document, image, and archive files are allowed.`), false)
    }
  }
})

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Test email connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error)
  } else {
    console.log('Email server is ready to send messages')
  }
})

// API route for form submission
app.post('/api/submit', (req, res, next) => {
  upload.single('attachment')(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          message: 'File size must be less than 5MB'
        })
      }
      if (err.message.includes('Invalid file type')) {
        return res.status(400).json({
          success: false,
          message: err.message
        })
      }
      console.error('Multer error:', err)
      return res.status(500).json({
        success: false,
        message: 'File upload error'
      })
    }
    next()
  })
}, async (req, res) => {
  try {
    const { name, subject, message } = req.body

    // Validate required fields
    if (!name || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      })
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'agozieiwunna@gmail.com',
      subject: `New Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f39c12; padding-bottom: 10px;">New Form Submission</h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
          </div>
          ${req.file ? '<p><strong>Attachment:</strong> Included</p>' : ''}
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This message was sent through Prof. Michael Edeh Onyema Website.</p>
        </div>
      `,
      attachments: req.file ? [{
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype
      }] : []
    }

    // Send email
    await transporter.sendMail(mailOptions)

    console.log('Email sent successfully to agozieiwunna@gmail.com')

    res.json({
      success: true,
      message: 'Form submitted successfully! Email sent to agozieiwunna@gmail.com'
    })

  } catch (error) {
    console.error('Error processing form submission:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    })
  }
})

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Static files served from: ${path.join(__dirname, 'public')}`)
})

