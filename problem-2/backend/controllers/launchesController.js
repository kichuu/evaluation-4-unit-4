import mongoose from "mongoose"
import Launches from "../models/launchesModel.js"


// orbit : {type : String, enum :["LE0" , "MEO" , "HEO"]},
// launchyear : {type : String},
// launchsuccess : {type : Boolean},
// firststagereused : {type : Boolean }


export const postLaunches = async(req,res) =>{
    let {orbit,launchyear,launchsuccess,firststagereused} = req.body
    let newlaunch = {}
    newlaunch.orbit = orbit
    newlaunch.launchyear=launchyear,
    newlaunch.launchsuccess=launchsuccess,
    newlaunch.firststagereused=firststagereused,


    Launches.create(newlaunch)
    res.send({message : "new launchCreated", newlaunch})
}

export const postAllLaunches = async(req,res) => {
    const alldata = await fetch("https://api.spacexdata.com/v3/launches")
 let newdata = await (alldata.json())
    newdata.forEach(data => {
    let newlaunch = {}
    newlaunch.flightnumber = data.data
    newlaunch.orbit = data.rocket.second_stage.payloads[0].orbit
    newlaunch.launchyear=Number(data.launch_year),
    newlaunch.launchsuccess=data.launch_success,
    newlaunch.firststagereused=data.rocket.first_stage.cores[0].reused,
    Launches.create(newlaunch)  
    });
    res.send("data added succesfully")
}

export const getLaunchesDate = async(req,res)=>{
    let {startdate,enddate} = req.body
    let allLaunches = await Launches.find({launchsuccess : true})
    allLaunches = allLaunches.filter(launch=> launch.launchyear > startdate)
    let arr = [allLaunches[0] , allLaunches[1]]
    console.log(allLaunches)
    res.send(arr)
}

export const getReuse = async(req,res)=>{
    let resued = await Launches.find({firststagereused : true})

    res.status(201).send({"resuedtimes":resued.length})
}   


export const getOrbit = async(req,res)=>{
    let orbit = req.body.orbit
    let launches = Launches.find({orbit : orbit})
    res.send(launches.length)
}