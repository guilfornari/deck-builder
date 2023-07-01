import { DeckCard } from "../protocols";
import * as deckRepository from "../repositories/deck-repository";

export function buildDeck(card: DeckCard) {
    return deckRepository.buildDeck(card);
}

export function listDeck() {
    return deckRepository.listDeck();
}