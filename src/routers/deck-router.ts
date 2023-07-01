import { Router } from "express";
import * as deckController from "../controllers/deck-controller";

const deckRouter = Router();

deckRouter.get("/decks", deckController.listDeck);
deckRouter.post("/decks", deckController.buildDeck);

export default deckRouter;