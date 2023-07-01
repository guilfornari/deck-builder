import { DeckCard } from "../protocols";
import * as deckRepository from "../repositories/deck-repository";

export function buildDeck(card: DeckCard) {
    return deckRepository.buildDeck(card);
}

export async function listDeck() {
    const deckList = await deckRepository.listDeck();
    return deckList.rows;
}

export function deleteCard(cardId: number) {
    return deckRepository.deleteCard(cardId);
}

export function updateCard(cardId: number, card: DeckCard) {
    return deckRepository.updateCard(cardId, card);
}
