const express = require('express')
const cors = require('cors')
const app = express()
const hotels = require('./hotels.json')
const mongoose = require('mongoose')
const Booking = require('./models/booking')

// connect to database with mongodb:
mongoose.connect("mongodb://localhost/hotelDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())
app.use(cors())

// GET HOTELS
app.get('/hotels', (req, res) => {
    res.json(hotels)
})

// ADD NEW RESERVATION
app.post('/booking', (req, res) => {
    const command = new Booking({
        name : req.body.name,
        email : req.body.email,
        startDate : req.body.startDate,
        endDate : req.body.endDate
    })
    const newCommand = command.save()
    res.json(newCommand)
})

//GET RESERVATIONS
app.get('/commands', async (req, res) => {
    const commands = await Booking.find()
    res.json(commands)
})

// DELETE COMMANDS
app.delete('/delete/:id', (req, res) => {
    Booking.findByIdAndDelete(req.params.id).then(() => {
        res.json({message : "Command Deleted"})
    })
})

app.listen(8080, () => console.log("Server Running on port 8080"))