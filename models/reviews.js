const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    member_rating:String,
    image:String,
    location_name:String,
    category:[
        {
            type:Schema.Types.ObjectId,
            ref:"Category"
        }
    ]

},{timestamps:true});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;