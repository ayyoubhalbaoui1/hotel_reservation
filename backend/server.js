const express = require('express')
const cors = require('cors')
const app = express()
const hotels = require('./hotels.json')
const mongoose = require('mongoose')
const Reservation = require('./models/reservation')

// connect to database with mongodb:
mongoose.connect("mongodb://localhost/db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())
app.use(cors())

// get all hotels :
app.get('/hotels', (req, res) => {
    res.json(hotels)
})

// post new reservation :
app.post('/reservation', (req, res) => {
    const command = new Reservation({
        name : req.body.name,
        email : req.body.email,
        checkIn : req.body.checkIn,
        checkOut : req.body.checkOut
    })
    const newCommand = command.save()
    res.json(newCommand)
})

// get all reservations :
app.get('/commands', async (req, res) => {
    const commands = await Reservation.find()
    res.json(commands)
})

// delete Command By ID :
app.delete('/delete/:id', (req, res) => {
    Reservation.findByIdAndDelete(req.params.id).then(() => {
        res.json({message : "Command Deleted"})
    })
})

app.listen(8080, () => console.log("Server Running on port 8080"))