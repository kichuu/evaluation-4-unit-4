import mongoose from "mongoose"
import Launches from "../models/launchesModel.js"

export const postAllLaunches = async (req, res) => {
  const response = await fetch("https://api.spacexdata.com/v3/launches")
  const newdata = await response.json()

  for (const data of newdata) {
    const existingLaunch = await Launches.findOne({
      flightnumber: data.flight_number,
    })

    if (!existingLaunch) {
      const newlaunch = {
        flightnumber: data.flight_number,
        orbit: data.rocket.second_stage.payloads[0]?.orbit ,
        launchyear: Number(data.launch_year),
        launchsuccess: data.launch_success,
        firststagereused: data.rocket.first_stage.cores[0]?.reused ,
      }
      await Launches.create(newlaunch)
    }
  }

  res.json({ message: "Data added successfully" })
}

export const postLaunches = async (req, res) => {
  const { orbit, launchyear, launchsuccess, firststagereused } = req.body

  const newLaunch = await Launches.create({
    orbit,
    launchyear: Number(launchyear),
    launchsuccess,
    firststagereused,
  })

  res.json({ message: "New launch created", newLaunch })
}

export const getLaunchesDate = async (req, res) => {
  try {
    let { startdate, enddate } = req.body

    startdate = Number(startdate)
    enddate = Number(enddate)

    const launches = await Launches.find({
      launchsuccess: true,
      launchyear: { $gte: startdate, $lte: enddate },
    })
      .sort({ launchyear: 1 })
      .limit(2)

    res.json(launches)
  } catch (error) {
    console.error("Error fetching launches:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const getReuse = async (req, res) => {
  const reused = await Launches.find({ firststagereused: true })
  const reusedcount = reused.length
  res.json({ reusedcount })
}

export const getOrbit = async (req, res) => {
    let {orbit} = req.body
    let launches = await Launches.find({ orbit: orbit })
    res.json({orbitcount : launches.length})
  }
