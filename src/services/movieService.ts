import { db } from '../../config/database'
import { Movie, NewMovie, MovieUpdate } from 'tables'

export async function findMovieById(id: string) {
  return await db
    .selectFrom('movies')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export async function findAllMovies() {
  return await db.selectFrom('movies').selectAll().execute()
}

export async function updateMovie(id: string, updateWith: MovieUpdate) {
  await db.updateTable('movies').set(updateWith).where('id', '=', id).execute()
}

export async function createMovie(movie: NewMovie) {
  return await db
    .insertInto('movies')
    .values(movie)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function deleteMovie(id: string) {
  return await db
    .deleteFrom('movies')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}
