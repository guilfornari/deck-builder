import { Request, Response } from "express";
import httpStatus from "http-status";
import * as deckService from "../services/deck-service";
import { DeckCard } from "../protocols";

export async function buildDeck(request: Request, response: Response) {

    const deckCard = await request.body as DeckCard;

    deckService.buildDeck(deckCard);

    response.sendStatus(httpStatus.CREATED);
}

export async function listDeck(request: Request, response: Response) {

    const deck = await deckService.listDeck();

    response.send(deck);
}

export async function deleteCard(request: Request, response: Response) {
    const { id } = request.params;
    const cardId: number = parseInt(id);

    await deckService.deleteCard(cardId);

    response.sendStatus(httpStatus.ACCEPTED);
}

export async function updateCard(request: Request, response: Response) {
    const { id } = request.params;
    const cardId: number = parseInt(id);

    const deckCard = await request.body as DeckCard;

    deckService.updateCard(cardId, deckCard);

    response.sendStatus(httpStatus.ACCEPTED);
}



