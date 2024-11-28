import express from "express";

const app = express();
const port = 3000;

function buzzer(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log("Request Host: ", req.hostname);
  console.log("Request IP: ", req.ip);
  next();
}

app.use(buzzer);

app.get("/", (req, res) => {
  res.send("Hello Buzzer");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
