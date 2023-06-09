import express from "express"
import cors from "cors"

import productRouter from "./routes/products.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", productRouter)

app.listen(8800)