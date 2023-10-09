import express from 'express'
import Movies from '../controller/movieController'
const movieRouter = express.Router()

movieRouter.get('/all', Movies.getMovies)
movieRouter.post('/create', Movies.addMovies)
movieRouter.get('/movie/:id', Movies.findMovies)
movieRouter.post('/update/:id', Movies.updateMovies)
movieRouter.delete('/delete/:id', Movies.removeMovies)

export default movieRouter
