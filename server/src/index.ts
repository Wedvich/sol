import { createServer } from "node:http";
import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.post("/api/apply", (req, res) => {
  res.status(200).send({ status: "Changes applied" });
});

const server = createServer(app);

server.on("listening", () => {
  console.log(`Server is listening on port ${PORT}`);
});

server.listen(PORT);
