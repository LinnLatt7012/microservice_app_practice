import { Response, Request, NextFunction } from "express";
import { CustomError } from "../errors/customError";

export const errorhandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() })
    }

    return res.status(400).send({
        errors: [{ message: 'Something went wrong!' }]
    })
}