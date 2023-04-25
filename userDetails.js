const mongoose=require("mongoose");

const userDetailsSchema= new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        gender:String,
        email:String,
        income:String,
        carBrand:String,
        Phone:String,
    },{
        collection:"UserInfo",
    }
);

mongoose.model("UserInfo",userDetailsSchema);