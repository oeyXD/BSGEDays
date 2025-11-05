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
const frontendPath = path.join(__dirname, "/public"); // frontend path
const partialsPath = path.join(frontendPath, "/pages partials"); // partials path
const learningMainPath = path.join(frontendPath, "/pages Learning Hub"); // main learning hub path
const learningSurvPath = path.join(learningMainPath, "/surveying"); // surveying path
const learningCartogrPath = path.join(learningMainPath, "/cartography"); // cartography path



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
// format: app.get("/surveying/", (req, res) => { res.render(learningSurvPath + "/.ejs") }); //
{
  app.get("/surveying", (req, res) => { res.render(learningMainPath + "/Surveying.ejs") }); // Main surveying page route

  // corrections page routes
  {
    app.get("/surveying/corrnormtension", (req, res) => { res.render(learningSurvPath + "/corrNormTension.ejs") }); // Correction Due to Normal Tension page route
    app.get("/surveying/corrsag", (req, res) => { res.render(learningSurvPath + "/corrSag.ejs") }); // Correction Due to Sag page route
    app.get("/surveying/corrtemp", (req, res) => { res.render(learningSurvPath + "/corrTemp.ejs") }); // Correction Due to Temperature page route
    app.get("/surveying/corrtension", (req, res) => { res.render(learningSurvPath + "/corrTension.ejs") }); // Correction Due to Normal Tension page route
    app.get("/surveying/gencorrtaping", (req, res) => { res.render(learningSurvPath + "/genCorrTaping.ejs") }); // General taping corrections page route
  }
  // about angle page routes
  {
    app.get("/surveying/meridians", (req, res) => { res.render(learningSurvPath + "/meridians.ejs") }); //
    app.get("/surveying/magdeclcomps", (req, res) => { res.render(learningSurvPath + "/magDeclComps.ejs") }); // Magnetic Declination and Compass page route
    app.get("/surveying/north", (req, res) => { res.render(learningSurvPath + "/theNorth.ejs") }); // The North page route
    app.get("/surveying/angmeasunts", (req, res) => { res.render(learningSurvPath + "/angularMeasUnits.ejs") }); // Units of Angular Measurement page route
  }
  // tools page routes
  {
    app.get("/surveying/pacecalc", (req, res) => { res.render(learningSurvPath + "/pacecalc.ejs") }); // Pacecalc page route
    app.get("/surveying/transit", (req, res) => { res.render(learningSurvPath + "/transit.ejs") }); // The Engineer's Transit page route
  }
}

// Cartography page routes
{
  app.get("/cartogr", (req, res) => { res.render(learningMainPath + "/Cartography.ejs") }); // Main cartography page route
}

// Geodesy page route
{
  app.get("/geodesy", (req, res) => { res.render(learningMainPath + "/Geodesy.ejs") });
}

// Photogrammetry page route
{
  app.get("/photogram", (req, res) => { res.render(learningMainPath + "/Photogrammetry.ejs") });
}







// 404 page route
app.use((req, res) => { res.status(404).render(partialsPath + "/404.ejs", { url: req.originalUrl, }) });

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}. Go to: http://localhost:${PORT}/`
  );
});
