import express from "express"

import {getAllBooks, getOneBook, addBook, updateBook, deleteBook, borrowbook, returnbook} from "../controllers/bookcontroller.js"
const router = express.Router();

router.get("/", getAllBooks)
router.get("/:id", getOneBook)
router.post("/", addBook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)
router.put("/borrow/:id", borrowbook)
router.put("/return/:id", returnbook)

export default router;