

const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({ 
    title:{
        type: String,
        unique: true,
        required: 'title is required',
        trim: true
    },
    releaseDate: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    movieDirector:{
        type: String,
        trim: true
    },
    
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


module.exports = mongoose.model('Movie', movieSchema)