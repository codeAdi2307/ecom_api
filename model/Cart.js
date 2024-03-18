import mongoose from "mongoose";

const Schema = mongoose.Schema;
const cartSchema = new Schema({
    userId:{
        type:String,
        required: true,
        unique:true

    },
    products:[
        {
        productId:{
            type:String,

        },
        quantity:{
            type:Number,
            default:1
        }
    },
    ], 
},
 {timestamps:true});

export default mongoose.model("Cart",cartSchema)