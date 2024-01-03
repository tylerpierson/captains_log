// Initial Setup
// require('dotenv').config()
const express = require('express') // imported express from node modules
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
// const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000

const app = express()

// app.use(express.urlencoded({ extended:true }))

// Query to override a method
// app.use(methodOverride('_method'))

// Set up the view engine
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

// mongoose.connect(process.env.MONGO_URI)
// mongoose.connection.once('open', () => {
//     console.log('connected to mongodb')
// })

// Index


// New
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

// Destroy


// Update


// Create


// Edit


// Show


// Connect App to open PORT or 3000 as stated above in PORT variable
app.listen(PORT, () => {
    console.log(`PORT is active @ ${PORT}`)
})