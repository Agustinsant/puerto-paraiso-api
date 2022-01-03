const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.Schema.Types.Number.cast(false)
mongoose.Schema.Types.String.cast(false)

const schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortdescription: {
        type: String,
        required: true
    },
    prominent: {
        type: String
    }
})

const Posada = mongoose.model('Posada', schema)

module.exports = Posada