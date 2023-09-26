import { Pool } from 'pg'
import { Generated, Kysely, PostgresDialect } from 'kysely'

interface movieTable {
  id: Generated<number>
  title: string
  genres: string[]
}
interface Database {
  movie: movieTable
}
const dialect = new PostgresDialect({
  pool: new Pool({
    client: 'cockroachdb',
    connection:
      'postgresql://jepwyy:qwer1234@wonky-saiga-6414.8nk.cockroachlabs.cloud:26257/movie-api?sslmode=verify-full',
  }),
})

export const db = new Kysely<Database>({
  dialect,
})
