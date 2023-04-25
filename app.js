const express = require("express");
const app = express();
const mongoose=require("mongoose")
app.use(express.json())


const mongoUrl="mongodb://0.0.0.0:27017/new";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to db");})
.catch(e=>console.log(e));







const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server Started at ${port}`)
});


app.post("/post",async (req, res)=>{
    console.log(req.body);
    const{data}=req.body;

    if(data!=""){
        res.send({status:"ok"})

    }
});

require("./userDetails");

const User=mongoose.model("UserInfo");

app.get("/getAllUser",async(req, res)=>{
    try{
      const allUser=await User.find({});
      res.send({status:"ok",data:allUser});
    }catch(error){
        console.log(error);
    }
})

