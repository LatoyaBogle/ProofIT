const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category:{type:String},
    type:{type:String}
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;