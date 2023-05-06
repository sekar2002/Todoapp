const mongoose=require('mongoose')
exports.connectDb=async()=>
{
    try{
        const conn=await mongoose.connect('mongodb://localhost:27017/todo')
        console.log("db con")
    }
    catch(error){
        console.log("not connected")

    }
}