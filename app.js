import express from "express"
import dotenv from "dotenv"
import connectdb from "./config/database.js"
import bookRoutes from "./routes/Bookroutes.js"
import studentRoutes from "./routes/Studentroutes.js"
import attendantRoutes from "./routes/Attendantroutes.js"
import authorRoutes from "./routes/Authorroutes.js"

dotenv.config()
connectdb()

const app = express()

app.use(express.json())

app.use("/api/books", bookRoutes)
app.use("/api/students", studentRoutes)
app.use("/api/attendants", attendantRoutes)
app.use("/api/authors", authorRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default app