const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/website")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("logins",newSchema)

module.exports=collection 