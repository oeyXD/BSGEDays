// import morgan from "morgan"; import { error } from "console";

import express from "express";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";
import { title } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// paths
const frontendPath = path.join(__dirname, "/public");
const partialsPath = path.join(frontendPath, "/pages partials");
const learningMainPath = path.join(frontendPath, "/pages Learning Hub");
const learningSurvPath = path.join(learningMainPath, "/surveying");

app.set("view engine", "ejs");
app.set("views", frontendPath);

// layouts
app.use(expressLayouts);
app.set("layout", "layout");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(frontendPath));

// site name
const pgnm = "BSGE Days";

// Home page route
app.get("/", (req, res) => { res.render("home.ejs", { layout: "layout.ejs" }) });

// Surveying page routes 
{
  app.get("/surveying", (req, res) => { res.render(learningMainPath + "/Surveying.ejs") }); // Main surveying page route
  app.get("/surveying/pacecalc", (req, res) => { res.render(learningSurvPath + "/pacecalc.ejs") }); // Pacecalc page route
  app.get("/surveying/corrtemp", (req, res) => { res.render(learningSurvPath + "/corrTemp.ejs") }); // CorrTemp page route
  app.get("/surveying/corrtension", (req, res) => { res.render(learningSurvPath + "/corrTension.ejs") }); //
  app.get("/surveying/gencorrtaping", (req, res) => { res.render(learningSurvPath + "/genCorrTaping.ejs") }); // General taping corrections page route
  app.get("/surveying/transit", (req, res) => { res.render(learningSurvPath + "/transit.ejs") }); // The Engineer's Transit page route

}


// 404 page route
app.use((req, res) => {
  res.status(404).render(partialsPath + "/404.ejs", {
    url: req.originalUrl,
  });
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${PORT}. Go to: http://localhost:${PORT}/`
  );
});
