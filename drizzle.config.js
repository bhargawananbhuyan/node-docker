require("dotenv").config();

const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  dialect: "mysql",
  schema: "./db/schema/*",
  out: "./db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
