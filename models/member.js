const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const memberSchema = new Schema({
    member_id: {type:String},
    users:[
        {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
   
})

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;