import express from "express"

import {registerAttendant, loginAttendant, getAllAttendants, getOneAttendant, deleteAttendant} from "../controllers/attendantcontroller.js"

const router = express.Router();

router.post("/register", registerAttendant)
router.post("/login", loginAttendant)
router.get("/", getAllAttendants)
router.get("/:id", getOneAttendant)
router.delete("/:id", deleteAttendant)

export default router;