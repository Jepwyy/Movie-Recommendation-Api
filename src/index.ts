import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import movieRouter from './routes/movieRouter'
dotenv.config()

const PORT: number = 8080
const app = express()
app.use(express.json())
app.use(cors())

app.use('/movies', movieRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
