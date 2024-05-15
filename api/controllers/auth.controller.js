import User from '../models/user.models.js';
import bycryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hasshedPassword = bycryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hasshedPassword});
    try {
        await newUser.save();
        res.status(201).json({message: 'User created successfully'});
        
    } catch (error) {
        next(error);
    }
}