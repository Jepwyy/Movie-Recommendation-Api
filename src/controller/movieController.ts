import { Request, Response } from 'express'
import {
  createMovie,
  findAllMovies,
  deleteMovie,
  findMovieById,
  updateMovie,
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
async function updateMovies(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { title, genres } = req.body
    if (!id || !title || !genres) {
      return res
        .status(400)
        .json({ message: 'Please Enter All Required Fields!' })
    }
    await updateMovie(id, {
      title,
      genres,
    })
    res.status(200).json({ message: 'Movie updated successfully' })
  } catch (error) {
    console.error('Error fetching movies:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
async function removeMovies(req: Request, res: Response) {
  try {
    const { id } = req.params
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

async function findMovies(req: Request, res: Response) {
  try {
    const { id } = req.params
    if (!id) {
      res.status(400).json({ error: 'No id detected' })
    }

    const movie = await findMovieById(id)
    if (!movie) {
      res.status(404).json({ error: `Movie with ID ${id} not found` })
    } else {
      res.status(200).json(movie)
    }
  } catch (error) {
    console.error('Error fetching movies:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
async function addMoreMovies(req: Request, res: Response) {
  try {
    const moviesArray = req.body

    if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
      return res
        .status(400)
        .json({ message: 'Please provide an array of movies' })
    }

    for (const movieData of moviesArray) {
      const { title, genres } = movieData

      if (!title || !genres || !Array.isArray(genres)) {
        console.error('Invalid movie data:', movieData)
        continue
      }

      const movie = await createMovie({
        title,
        genres,
      })

      console.log(`Movie added successfully: ${title}`)
    }

    res.status(200).json({ message: 'Movies added successfully' })
  } catch (error) {
    console.error('Error adding movies:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
export default {
  getMovies,
  addMovies,
  removeMovies,
  findMovies,
  updateMovies,
  addMoreMovies,
}
