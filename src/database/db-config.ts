import { knex as setupKnex, Knex } from "knex"

const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: "./database/db/app.db",
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./src/database/migrations",
  },
}

const knex = setupKnex(config)

export { knex, config }
