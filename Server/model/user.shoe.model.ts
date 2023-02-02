import mongoose,{Schema} from "mongoose";

interface ShoeModel{
    shoeName:string;
    views:[];
    brand:string;
    summary:string;
    category:string;
}

interface ShoeSchema extends ShoeModel,Document{}

const ShoeModelSchema = new mongoose.Schema({
    shoeName:{
        type:String,
    },
    views:{
        type:[]
    },
    brand:{
        type:String,
    },summary:{
        type:String,
    },
    category:{
        type:String
    }
},{timestamps:true})

export default mongoose.model<ShoeSchema>("ShoeModel",ShoeModelSchema)