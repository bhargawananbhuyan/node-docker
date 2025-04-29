require("dotenv").config();

const { drizzle } = require("drizzle-orm/mysql2");
const schema = require("./schema");

const db = drizzle(process.env.DATABASE_URL, {
  schema,
  mode: "default",
});

module.exports = db;
