import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

// middleware
app.use(cors({
  origin: "*"
}))

app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", notesRoutes)

// ✅ Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../FRONTEND/dist")))

  app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../FRONTEND/dist/index.html"))
})
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on PORT:", PORT)
  })
})


