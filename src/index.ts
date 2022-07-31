import express, { Request, Response } from "express";
import dbConnection from "./config/dbConnection";
import routes from "./routes/routes";

const app = express();
const port = 3000;

app.use("/", routes);

dbConnection();

app.listen(port, (): void => {
  console.log(`Example app listening at http://localhost:${port}`);
});
