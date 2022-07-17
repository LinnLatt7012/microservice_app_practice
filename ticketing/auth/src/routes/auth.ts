import express from 'express';
import { body } from 'express-validator'
import { currentUser, signIn, signOut, signUp } from '../controllers/authController';
const router = express.Router();

router.get('/currentuser', currentUser);
router.post('/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be betwee 4 and 20 characters')
    ], signUp);
router.post('/signin', signIn);
router.post('/signout', signOut);


export { router };