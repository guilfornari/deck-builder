import connection from "../databse/databes";
import { DeckCard } from "../protocols";


export function buildDeck(card: DeckCard) {
    const { name, cardType, color, manaTotal, amount } = card;
    let query: string = `
        INSERT INTO cards(name, "cardType", color, "manaTotal", amount)
        VALUES ($1, $2, $3, $4, $5)`;
    return connection.query(query, [name, cardType, color, manaTotal, amount]);
}

export function listDeck() {
    let query: string = `SELECT * FROM cards`;
    return connection.query(query);
}

export function deleteCard(cardId: number) {
    let query: string = `
        DELETE FROM cards
        WHERE cards.id = $1;`;
    return connection.query(query, [cardId]);
}

export function updateCard(cardId: number, card: DeckCard) {
    const { name, cardType, color, manaTotal, amount } = card;
    let query: string = `
        UPDATE cards 
        SET name=$2, "cardType"=$3, color=$4, "manaTotal"=$5, amount=$6
        WHERE id=$1`;
    return connection.query(query, [cardId, name, cardType, color, manaTotal, amount]);
}

export function getCard(cardId: number) {
    let query: string = `
        SELECT * FROM cards
        WHERE cards.id = $1;`;
    return connection.query(query, [cardId]);
}