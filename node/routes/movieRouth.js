const express = require('express')

const moviesModel = require('../models/moviesModels')

const Router = express.Router()

// here the work of the admin when he create the movies he create a  profile for the movie characteristic
// where  he define from the title  particular information of it 

Router.post('/moviecharacteristic', async(req, res) => {
    const {title, releaseDate, category, movieDirector} = req.body

    if ( (title !== "") && ( releaseDate !== "") && (category !== "") && ( movieDirector !== "")) {
        
        try {
            const Movies = new moviesModel({
                title: title,
                releaseDate: releaseDate,
                category: category,
                movieDirector: movieDirector
                
            })

            const movie = await Movies.save()
            return res.status(200).json(movie)
        } catch (error) {
            return res.status(500).json({'msg': error.message})
        }
    } else {
        return res.status(500).json({"msg": " you forget to fill it!"})
    }
})

// if anythng accure when he post them maybe from the words in profile he use by the id to know which movie and update it

Router.put('/:movieId', async (req, res) => {
    const {title, releaseDate, category, movieDirector} = req.body
    const {movieId} = req.params

    const message = await moviesModel.findByIdAndUpdate(movieId, {title: title, releaseDate: releaseDate, category: category, movieDirector: movieDirector}
        ,{ new: true
    })

    return res.status(200).json({"msg": " update succesfully"})
})


// the admin  delete old movies to post new one 

Router.delete('/:movieId', async (req, res) => {
    const {movieId} = req.params

    await moviesModel.findOneAndDelete({_id: movieId})
    return res.status(200).json({"msg": "Message well deleted !"})
})



//here the admin see all the movies that he created 

Router.get('/allmovies',async (req, res) => {
        const allmovies = await moviesModel.find({})

        return res.status(200).json(allmovies)  
    
    })

module.exports = Router