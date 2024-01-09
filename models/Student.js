const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: [{
        type: String,
        default: "Free"
    }],
    active: [{
        type: Boolean,
        default: true
    }]
})

module.exports = mongoose.model('Note', studentSchema);