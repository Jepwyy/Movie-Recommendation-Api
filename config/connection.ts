import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const dialect = new PostgresDialect({
  pool: new Pool({
    client: 'cockroachdb',
    connection:
      'postgresql://jepwyy:qwer1234@wonky-saiga-6414.8nk.cockroachlabs.cloud:26257/movie-api?sslmode=verify-full',
  }),
})

export const connection = new Kysely({
  dialect,
})
