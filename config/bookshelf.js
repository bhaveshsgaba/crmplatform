const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "root",
    database: "CRMplatform",
  },
});

const bookshelf = require("bookshelf")(knex);

bookshelf.model("country", {
  tableName: "countries",
  requireFetch: false,
});

bookshelf.model("state", {
  tableName: "states",
  requireFetch: false,
});

bookshelf.model("district", {
  tableName: "districts",
  requireFetch: false,
});

module.exports = bookshelf;
