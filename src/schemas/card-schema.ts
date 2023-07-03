import Joi from "joi";
import { DeckCard } from "../protocols";


export const cardSchema = Joi.object<DeckCard>({
    name: Joi.string().required(),
    cardType: Joi.string().required(),
    color: Joi.string().required(),
    manaTotal: Joi.number().required(),
    amount: Joi.number().required()
})