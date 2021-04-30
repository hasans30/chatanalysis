const express = require("express");
const cors=require('cors');
const app = express();
const port = process.env.PORT || 3030;
const programmingLanguagesRouter = require("./routes/programmingLanguages");
const  monthlyStatRouter = require("./routes/monthlyStat");

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

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

app.use("/data",cors(corsOptions),monthlyStatRouter);

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
