const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    filename: {
        type: String,
        required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('File', fileSchema)