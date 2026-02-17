const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const healthRoutes = require("./routes/health.routes")
const authRoutes = require("./routes/auth.routes")

const app = express()

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
        credentials: true,
    })
)

app.use(express.json())

app.use("/api", healthRoutes)
app.use("/api/auth", authRoutes)

app.get("/", (req, res) => res.send("Express server is up"))

const PORT = process.env.PORT || 5000

connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`✅ API: http://localhost:${PORT}`))
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err.message)
        process.exit(1)
    })