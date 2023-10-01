import express from 'express'
import Movies from '../controller/movieController'
const movieRouter = express.Router()

movieRouter.get('/all', Movies.getMovies)
movieRouter.get('/create', Movies.addMovies)

export default movieRouter
