import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
    // id:Number,
    setup:String,
    punchline:String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref:"User", required:false }
})

const output = mongoose.model('Joke', jokeSchema);

export default output;