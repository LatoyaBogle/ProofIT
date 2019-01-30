const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberreviewSchema = new Schema({
    approved_rating:String,
    food_image:String,
    location_name:String,
    category:[
        {
            type:Schema.Types.ObjectId,
            ref:"Category"
        }
    ],
    

},{timestamps:true});

const Review = mongoose.model("Review", memberreviewSchema);

module.exports = Review;