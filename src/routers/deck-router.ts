import { Router } from "express";
import * as deckController from "../controllers/deck-controller";

const deckRouter = Router();

deckRouter.get("/decks", deckController.listDeck);
deckRouter.get("/decks/:id", deckController.getCard);
deckRouter.post("/decks", deckController.buildDeck);
deckRouter.delete("/decks/:id", deckController.deleteCard);
deckRouter.put("/decks/:id", deckController.updateCard);


export default deckRouter;