import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { router as authRouter } from './routes/auth';
import { errorhandler } from './middlewares/errorhandler';
import { NotFoundError } from './errors/notfound-error';
import { User } from './models/user';
const app = express();
app.use(json())

app.use('/api/users', authRouter);

app.all('*', () => {
    throw new NotFoundError()
})
app.use(errorhandler)


const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
        app.listen(3000, async () => {
            console.log('Listenig on port 3000')
            const user = User.build({
                email: 'test@test.com',
                password: 'password'
            })
            await user.save()
            console.log(User.find());
        })

    } catch (err) {
        console.log(err)
    }
}

start()