const express = require("express");
const app = express();
const db = require("./db");
const { user: userTable } = require("./db/schema");

const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", async (req, res) => {
  const { name } = req.body;
  await db.insert(userTable).values({ name });

  res.json({ success: true }).status(201);
});

app.get("/users", async (req, res) => {
  const users = await db.query.user.findMany();
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
