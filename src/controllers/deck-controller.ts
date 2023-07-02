import { Request, Response } from "express";
import httpStatus from "http-status";
import * as deckService from "../services/deck-service";
import { DeckCard } from "../protocols";
import { isIdValid } from "../helpers/utils";

export async function buildDeck(request: Request, response: Response) {

    try {
        const deckCard = await request.body as DeckCard;
        deckService.buildDeck(deckCard);
        response.sendStatus(httpStatus.CREATED);

    } catch (error) {
        console.log(error);
        response.status(httpStatus.NOT_FOUND).send(error.message);
    }
}

export async function listDeck(request: Request, response: Response) {

    try {
        const deck = await deckService.listDeck();
        response.status(httpStatus.OK).send(deck);

    } catch (error) {
        console.log(error);
        response.status(httpStatus.NOT_FOUND).send(error.message);
    }
}

export async function deleteCard(request: Request, response: Response) {
    const { id } = request.params;
    const cardId: number = parseInt(id);
    if (!isIdValid(cardId)) {
        return response.sendStatus(httpStatus.BAD_REQUEST);
    }

    try {
        await deckService.deleteCard(cardId);
        response.sendStatus(httpStatus.ACCEPTED);

    } catch (error) {
        console.log(error);
        response.status(httpStatus.NOT_FOUND).send(error.message);
    }
}

export async function updateCard(request: Request, response: Response) {
    const { id } = request.params;
    const cardId: number = parseInt(id);
    if (!isIdValid(cardId)) {
        return response.sendStatus(httpStatus.BAD_REQUEST);
    }

    try {
        const deckCard = await request.body as DeckCard;
        deckService.updateCard(cardId, deckCard);
        response.sendStatus(httpStatus.ACCEPTED);

    } catch (error) {
        console.log(error);
        response.status(httpStatus.NOT_FOUND).send(error.message);
    }
}

export async function getCard(request: Request, response: Response) {
    const { id } = request.params;
    const cardId: number = parseInt(id);
    if (!isIdValid(cardId)) {
        return response.sendStatus(httpStatus.BAD_REQUEST);
    }

    try {
        const deck = await deckService.getCard(cardId);
        response.status(httpStatus.ACCEPTED).send(deck);

    } catch (error) {
        console.log(error);
        response.status(httpStatus.NOT_FOUND).send(error.message);
    }
}



