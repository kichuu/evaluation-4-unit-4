import mongoose from "mongoose";

const launchesSchema =new mongoose.Schema({
    flightnumber : {type : Number},
    orbit : {type : String},
    launchyear : {type : Number},
    launchsuccess : {type : Boolean},
    firststagereused : {type : Boolean }
})

const Launches =  mongoose.model("Launches" , launchesSchema)
export default Launches