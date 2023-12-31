import express, { Request, json, Response } from "express";
import httpStatus from "http-status";
import deckRouter from "./routers/deck-router";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(json());

app.get("/health", (request: Request, response: Response) => {
    response.sendStatus(httpStatus.OK);
});

app.use(deckRouter);
app.use(errorHandler);

const port: number = parseInt(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Server is up and running on PORT ${port}`);
});
