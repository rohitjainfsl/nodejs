import express from "express";
import bodyParser from "body-parser";

// bodyParser.json(), bodyParser.text(), bodyParser.raw()
const app = express();
app.use(bodyParser.json());

let cars = [
  { id: 1, model: "tata", make: 2000 },
  { id: 2, model: "maruti", make: 2000 },
  { id: 3, model: "honda", make: 2000 },
  { id: 4, model: "mahindra", make: 2000 },
  { id: 5, model: "toyota", make: 2000 },
  { id: 6, model: "ford", make: 2000 },
];

app.get("/", (req, res) => {
  res.json(cars);
});

app.post("/addCar", (req, res) => {
  const newCar = req.body;
  cars.push(newCar);
  res.status(201).json(cars);
});

app.delete("/deleteCar/:id", (req, res) => {
  const regex = /\/deleteCar\/\d+/;

  //   const regex = /\/deleteCar\/[0-9]+/;

  if (!req.url.match(regex)) {
    res.status(400).json({ error: "Invalid URL" });
  } else {
    const id = Number(req.params.id);
    cars = cars.filter((car) => car.id !== id);
    res.status(200).json(cars);
  }
});

app.put("/editCar/:id", (req, res) => {});

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
