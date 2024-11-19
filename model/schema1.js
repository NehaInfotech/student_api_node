const mongoose = require('mongoose')
const  studentSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('schema1',studentSchema)