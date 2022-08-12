

const mongoose = require('mongoose')

const rateSchema = new mongoose.Schema({ 
    rating:{
        type: String,
        required: 'rating is required',
        trim: true
    },
    commentTitle: {
        type: String,
        trim: true
    },
    commentContent: {
        type: String,
        trim: true
    },
    userId:{
        type: String,
        unique: true,
        trim: true
    },
 
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


module.exports = mongoose.model('Rate', rateSchema)