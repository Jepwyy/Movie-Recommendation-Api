import express from 'express'
import Movies from '../controller/movieController'
const movieRouter = express.Router()

movieRouter.get('/all', Movies.getMovies)
movieRouter.post('/create', Movies.addMovies)
movieRouter.delete('/delete', Movies.removeMovies)

export default movieRouter
