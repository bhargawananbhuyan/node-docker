const { mysqlTable, serial, varchar } = require("drizzle-orm/mysql-core");

const user = mysqlTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});

module.exports = {
  user,
};
