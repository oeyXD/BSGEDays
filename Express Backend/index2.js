import { error } from "console";
import express from "express";
import morgan from "morgan";
import path, { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const frontendPath = path.join(__dirname, "../Frontend");
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// for production
// Set up rate limiter: maximum of twenty requests per minute
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

// Serve static files from the "public" folder
app.use(express.static(frontendPath));

app.use(morgan("dev"));

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", frontendPath);

// Add helmet to the middleware chain.
// Set CSP headers to allow our Bootstrap and jQuery to be served
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "cdn.jsdelivr.net"],
    },
  })
);

// home page
app.get("/", (req, res) => {
  res.render(frontendPath + "/index.ejs", { title: "Mr.", name: "RJ" });
});

// pace calculator page
app.get("/pacecalc", (req, res) => {
  res.render(frontendPath + "/pacecalc.ejs", {});
});

// correction due to sag calculator page
app.get("/corrsag", (req, res) => {
  res.sendFile(path.join(frontendPath + "/corrsag.html"));
});

// correction due to tension calculator page
app.get("/corrtension", (req, res) => {
  res.sendFile(path.join(frontendPath + "/corrtension.html"));
});

// correction due to temperature calculator page
app.get("/corrtemp", (req, res) => {
  res.sendFile(path.join(frontendPath + "/corrtemp.html"));
});

app.listen(port, () => {
  console.log(
    `Server is listening on port ${port}. Go to: http://localhost:${port}`
  );
});
