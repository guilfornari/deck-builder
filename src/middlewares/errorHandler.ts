import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error, request: Request, response: Response, next: NextFunction) {
    if (error.type === "NotFoundError") return response.sendStatus(httpStatus.NOT_FOUND);
    if (error.type === "ConflictError") return response.sendStatus(httpStatus.CONFLICT);

    return response.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}