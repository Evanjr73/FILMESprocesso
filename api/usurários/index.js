import express from "express"
import userRoutes from "./routes/users"

import cors from "cors"

const app = express()

app.user(express.json())

app.use(cors())

app.user("/", userRoutes)

app.listen(8800)