const mongoose = require('mongoose')
// const student = require('./schema1')
const  marksSchema = new  mongoose.Schema({
    Hindi: {
        type:Number,
        required:true
    },
    English: {
        type:Number,
        required:true
    },
    Science: {
        type:Number,
        required:true
    },
    StudentId:{
        // type:mongoose.Schema.Types.ObjectId,
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'schema1'
    }

})
module.exports = mongoose.model('Schema2',marksSchema)