const express = require("express");
const app = express();
const port = process.env.PORT || 3030;
const programmingLanguagesRouter = require("./routes/programmingLanguages");
const  monthlyStatRouter = require("./routes/monthlyStat");

const  getdata=require("./data/data");
console.log(getdata.chartData().data);

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

app.use("/data",monthlyStatRouter);

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
