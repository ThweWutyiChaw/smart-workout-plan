var mongoose = require("mongoose");
const { create } = require("./challenge");
var Schema = mongoose.Schema;
var FoodSchema = new Schema({
    name:{
        type : String,
        required : true,
    },
    image :{
        type : String,
    },
    calorie:{
        type: Number,
        required : true,
    },
    per:{
        type:String,
        required : true,
    },
    category:{
        type:String,
        required: true,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref: "Admins",
    },
    description :{
        type: String,
    },
    created:{
        type: Date,
        default : Date.now(),
    },
    updated:{
        type: Date,
        default : Date.now(),
    },
});
module.exports = mongoose.model("Foods",FoodSchema);