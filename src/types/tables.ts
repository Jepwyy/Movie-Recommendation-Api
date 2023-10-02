import { Generated, Insertable, Selectable, Updateable } from 'kysely'

export interface movieTable {
  id: number
  title: string
  genres: string[]
}
export interface Database {
  movies: movieTable
}
export type Movie = Selectable<movieTable>
export type NewMovie = Insertable<movieTable>
export type MovieUpdate = Updateable<movieTable>
