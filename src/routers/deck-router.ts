import { Router } from "express";
import * as deckController from "../controllers/deck-controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema-middleware";
import { cardSchema } from "../schemas/card-schema";

const deckRouter = Router();

deckRouter.get("/decks", deckController.listDeck);
deckRouter.get("/decks/:id", deckController.getCard);
deckRouter.post("/decks", validateSchemaMiddleware(cardSchema), deckController.buildDeck);
deckRouter.delete("/decks/:id", deckController.deleteCard);
deckRouter.put("/decks/:id", deckController.updateCard);


export default deckRouter;