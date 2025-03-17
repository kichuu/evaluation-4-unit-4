import { Router } from "express";
import { getLaunchesDate, getOrbit, getReuse, postAllLaunches, postLaunches } from "../controllers/launchesController.js";
const router = Router()
router.get("/reused" , getReuse)

router.post("/all" ,postAllLaunches)

router.post("/date" , getLaunchesDate)
router.get("/orbit" , getOrbit)
router.post("/" , postLaunches)
export default router