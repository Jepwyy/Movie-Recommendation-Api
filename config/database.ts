import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import { Database } from 'tables'

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'movie-api',
    password: '9r1lObVGJ_q8EF9DeEqGsQ',
    host: 'my-projects-1-6465.8nk.cockroachlabs.cloud',
    user: 'jeffrey',
    port: 26257,
    max: 10,
    ssl: {
      rejectUnauthorized: false,

      ca: 'C:/Users/Jeff/AppData/Roaming/postgresql/root.crt',
    },
  }),
})

export const db = new Kysely<Database>({
  dialect,
})
