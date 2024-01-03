// Initial Setup
require('dotenv').config()
const express = require('express') // imported express from node modules
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000
const Log = require('./models/log')

const app = express()

app.use(express.urlencoded({ extended:true }))

// Query to override a method
app.use(methodOverride('_method'))

// Set up the view engine
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

// Index
app.get('/logs', async (req, res) => {
    try {
        const foundLogs = await Log.find({})
        res.render('logs/Index', {
            logs: foundLogs
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// New
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

// Destroy
app.delete('/logs/:id', async (req, res) => {
    try {
        await Log.findOneAndDelete({ '_id': req.params.id })
            .then(() => {
                res.redirect('/logs')
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// Update
app.put('/logs/:id', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    try {
        await Log.findOneAndUpdate({ '_id': req.params.id }, 
            req.body, { new: true })
            .then(() => {
                res.redirect(`/logs/${req.params.id}`)
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// Create
app.post('/logs', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    try{
        const createdLog = await Log.create(req.body)
        // res.send('received')
        res.redirect(`/logs/${createdLog._id}`)
    }catch(error){
        res.status(400).send({message: error.message})
    }
})

// Edit
app.get('/logs/:id/edit', async (req, res) => {
    try {
        const foundLog = await Log.findOne({'_id': req.params.id})
        res.render('logs/Edit', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// Show
app.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await Log.findOne({ _id: req.params.id })
        res.render('logs/Show', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// Connect App to open PORT or 3000 as stated above in PORT variable
app.listen(PORT, () => {
    console.log(`PORT is active @ ${PORT}`)
})