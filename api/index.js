const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3030;
const fs = require('fs');
const https = require('https');

const programmingLanguagesRouter = require("./routes/programmingLanguages");
const monthlyStatRouter = require("./routes/monthlyStat");
const monthlyAllStatRouter = require("./routes/monthlyStatAll");
const getDailyTrendsRouter = require('./routes/dailyTrends');
const getWordClouds = require('./routes/wordClouds');
const getAdminReport = require('./routes/adminReports');


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})



app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/prog", programmingLanguagesRouter);

app.use("/data", cors(), monthlyStatRouter);
app.use("/allmonthly", cors(), monthlyAllStatRouter);
app.use("/dailytrends", cors(), getDailyTrendsRouter);
app.use("/wordclouds", cors(), getWordClouds);
app.use("/adminreports", cors(), getAdminReport);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*
// this is how we can create https endpoint.
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3031, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
*/