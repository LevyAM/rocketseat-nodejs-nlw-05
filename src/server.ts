import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Olá NLW 05" });
});

app.post("/users", (request, response) => {
  return response.json({ message: "Post funcionando" });
});

app.listen(8000, () => console.log("Server is running on port 8000"));
