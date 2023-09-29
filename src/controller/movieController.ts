import { Request, Response } from 'express'
import { findAllMovies } from '../services/movieService'

export async function getMovies(req: Request, res: Response) {
  try {
    const movies = await findAllMovies()
    res.status(200).json(movies)
  } catch (error) {
    console.error('Error fetching movies:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
