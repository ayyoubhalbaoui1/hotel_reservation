
const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    startDate : {
        type : String,
        required : true,
    },
    endDate : {
        type : String,
        required : true,
    }

})

module.exports = mongoose.model('booking', bookingSchema)