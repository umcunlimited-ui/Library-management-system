import express from "express"

import {getAllStudents, getOneStudent, registerStudent, updateStudent, deleteStudent} from "../controllers/Studentcontroller.js"
 const router = express.Router();
 
router.get("/", getAllStudents)
router.get("/:id", getOneStudent)
router.post("/", registerStudent)
router.put("/:id", updateStudent)
router.delete("/:id", deleteStudent)

export default router;
