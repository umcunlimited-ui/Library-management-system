import express from "express"

import {getAllAuthors, getOneAuthor, addAuthor, updateAuthor, deleteAuthor} from "../controllers/authorcontroller.js"
 const router = express.Router();
 
router.get("/", getAllAuthors)
router.get("/:id", getOneAuthor)
router.post("/", addAuthor)
router.put("/:id", updateAuthor)
router.delete("/:id", deleteAuthor)

export default router;