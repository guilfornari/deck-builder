import { DeckCard } from "../protocols";

const deckList: DeckCard[] = [
    { name: "Black Lotus", cardType: "artifact", color: "colorless", manaTotal: 0, amount: 1 },
]

export function buildDeck(card: DeckCard) {
    return deckList.push(card);
}

export function listDeck() {
    return deckList;
}