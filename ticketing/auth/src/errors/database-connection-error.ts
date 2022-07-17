import { CustomError } from "./customError";


export class DatabaseConnectionError extends CustomError {
    statusCode: number = 500
    reason = 'Error Connecting to Database'

    constructor() {
        super('Connection to Database failed')

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [{ message: this.reason }]
    }
}