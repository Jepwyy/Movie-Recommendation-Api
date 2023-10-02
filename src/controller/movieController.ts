import { Request, Response } from 'express'
import {
  createMovie,
  findAllMovies,
  deleteMovie,
  findMovieById,
} from '../services/movieService'

async function getMovies(req: Request, res: Response) {
  try {
    const movies = await findAllMovies()
    res.status(200).json(movies)
  } catch (error) {
    console.error('Error fetching movies:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
async function addMovies(req: Request, res: Response) {
  try {
    const { title, genres } = req.body
    if (!title || !genres) {
      return res
        .status(400)
        .json({ message: 'Please Enter All Required Fields!' })
    }
    const movie = await createMovie({
      title,
      genres,
    })
    res.status(200).json({ message: 'Movie added successfully', movie })
  } catch (error) {
    console.error('Error fetching movies:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
async function removeMovies(req: Request, res: Response) {
  try {
    const { id } = req.body
    if (!id) {
      res.status(400).json({ error: 'No id detected' })
    }

    const movie = await deleteMovie(id)
    if (!movie) {
      res.status(404).json({ error: `Movie with ID ${id} not found` })
    } else {
      res.status(200).json({ message: 'Movie deleted successfully', movie })
    }
  } catch (error) {
    console.error('Error fetching movies:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
export default { getMovies, addMovies, removeMovies }
