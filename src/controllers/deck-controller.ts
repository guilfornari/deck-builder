import { Request, Response, response } from "express";
import httpStatus from "http-status";
import * as deckService from "../services/deck-service";
import { DeckCard } from "../protocols";



export function buildDeck(request: Request, response: Response) {
    const deckCard = request.body as DeckCard;
    deckService.buildDeck(deckCard);

    response.sendStatus(httpStatus.CREATED);
}

export function listDeck(request: Request, response: Response) {
    const deck = deckService.listDeck();
    response.send(deck);
}

