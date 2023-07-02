import { notFoundError } from "../errors/errors";
import { DeckCard } from "../protocols";
import * as deckRepository from "../repositories/deck-repository";

export async function buildDeck(card: DeckCard) {
    return deckRepository.buildDeck(card);
}

export async function listDeck() {
    const deckList = await deckRepository.listDeck();
    return deckList.rows;
}

export async function deleteCard(cardId: number) {
    const card = await deckRepository.getCard(cardId);
    if (!card.rows[0]) throw notFoundError(`Card with id ${cardId}`);
    return deckRepository.deleteCard(cardId);
}

export async function updateCard(cardId: number, card: DeckCard) {
    const result = await deckRepository.getCard(cardId);
    console.log(!result.rows[0]);
    if (!result.rows[0]) throw notFoundError(`Card with id ${cardId}`);
    return deckRepository.updateCard(cardId, card);
}

export async function getCard(cardId: number) {
    const card = await deckRepository.getCard(cardId);
    if (!card.rows[0]) throw notFoundError(`Card with id ${cardId}`);
    return card.rows[0];
}


