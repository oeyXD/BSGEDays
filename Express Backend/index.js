import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/contact", (req, res) => {
  res.send("Phone number: 123-456-7890");
});

app.get("/about", (req, res) => {
  res.send("This is a simple Express server.");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}. Go to: http://localhost:${port}/`
  );
});

//
