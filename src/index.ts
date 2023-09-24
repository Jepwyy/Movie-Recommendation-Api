console.log('Hello World')
import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

const PORT: number = 8080
const app = express()
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
