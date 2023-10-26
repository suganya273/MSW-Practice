const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/userdata", (request, response) => {
  response.status(200).send({ message: "Welcome" });
  response.end();
});
app.listen(port, () => {
  console.log("Server listening on port 5173");
});
