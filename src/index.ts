import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
//import { createConnection } from "typeorm";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("SchlarX Backend");
  });

/*createConnection().then(() => {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
}).catch(error => console.log(error));*/
app.listen(3000, () => {
  console.log("Server Started in PORT:3000");
});
