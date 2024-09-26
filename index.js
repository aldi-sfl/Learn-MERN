import express from "express";

const app = express();

const port = 5080;

app.get("/", (req, res) => {
  res.json(`halo bangg`);
});

app.listen(port, () => {
  console.log(`app berjalan pada port 8080`);
});

//
