const express = require('express')
const app = express()
const hotels = require('./hotels.json')
const fs = require('fs')
const cors = require('cors')

const reservations = require('./reservations.json')

// Middleware
app.use(express.json())
app.use(cors())

app.get('/hotels', (req,res) => {
    res.status(200).json(hotels)
})

app.post('/reservations', (req,res) => {
    reservations.push(req.body)
    console.log(JSON.parse(req.body));
    fs.writeFile(reservations, JSON.parse(req.body), (err, data) => {
        if (err) return console.log(err);
        console.log(data);
    })
    res.status(200).json(reservations)
})



app.delete('/reservations/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let reservation = reservations.find(reservation => reservation.id === id)
    reservations.splice(reservations.indexOf(reservation),1)
    res.status(200).json(reservations)
})

app.listen(8080, () => {
    console.log("App is running on port 8080")
})