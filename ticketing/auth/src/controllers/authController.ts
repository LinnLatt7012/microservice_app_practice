import { Request, Response } from "express"
import { validationResult } from "express-validator"
import { DatabaseConnectionError } from "../errors/database-connection-error"
import { RequestValidationError } from "../errors/request-validation-error"
export const currentUser = () => {

}

export const signUp = (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }

    throw new DatabaseConnectionError()

    return res.status(201).send({ message: 'Accounts successfully created' })
}

export const signIn = () => {

}

export const signOut = () => {

}