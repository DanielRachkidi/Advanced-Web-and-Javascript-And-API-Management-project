const express = require('express')

const RatingModels = require('../models/RatingModels')

const Router = express.Router()

//here the user if he want to rate the movie he click on it and then it take him to another page
//where he can put his comment  which userId is the user who login to the system has his on id 

Router.post('/userRating', async(req, res) => {
    const {rating ,commentTitle ,commentContent, userId} = req.body

    if ( (rating !== "") && ( commentTitle !== "") && (commentContent !== "") && ( userId !== "")) {
        
        try {
            const rate = new RatingModels({
                rating : rating,
                commentTitle : commentTitle,
                commentContent: commentContent,
                userId: userId 
                
            })

            const rater = await rate.save()
            return res.status(200).json(rater)
        } catch (error) {
            return res.status(500).json({'msg': error.message})
        }
    } else {
        return res.status(500).json({"msg": " you forget to fill it!"})
    }


})

// the user if he want to add or change their is a button edit  who mofify the the rates by the id future plan

Router.put('/:rateId', async (req, res) => {
    const {rating ,commentTitle ,commentContent} = req.body
    const {rateId} = req.params

    const message = await RatingModels.findByIdAndUpdate(rateId, {rating:rating ,commentTitle:commentTitle ,commentContent:commentContent}
        ,{ new: true
    })

    return res.status(200).json({"msg": " update succesfully"})
})


//the user if he went to delete his comment by the rate id  which will create a button to delete future plan


Router.delete('/:rateId', async (req, res) => {
    const {rateId} = req.params

    await moviesModel.findOneAndDelete({_id: rateId})
    return res.status(200).json({"msg": "Comment well deleted !"})
})






module.exports = Router