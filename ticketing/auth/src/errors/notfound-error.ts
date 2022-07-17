import { CustomError } from "./customError";


export class NotFoundError extends CustomError {
    statusCode: number = 404;
    reason = "Route not found"
    constructor() {
        super('Route not Found')

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: this.reason
            }
        ];
    }
}