import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { router as authRouter } from './routes/auth';
import { errorhandler } from './middlewares/errorhandler';
import { NotFoundError } from './errors/notfound-error';
const app = express();
app.use(json())

app.use('/api/users', authRouter);

app.all('*', () => {
    throw new NotFoundError()
})
app.use(errorhandler)

app.listen(3000, () => {
    console.log('Listenig on port 3000')
})
