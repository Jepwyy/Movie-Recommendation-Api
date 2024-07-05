import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import { Database } from 'tables'
import * as dotenv from 'dotenv'
dotenv.config()
const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URI,
  }),
})

export const db = new Kysely<Database>({
  dialect,
})
