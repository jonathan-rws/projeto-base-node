import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.status(200).json({ message: "Hellow world" });
});

app.listen(3333, () => console.log("server is running! 🚀"));
