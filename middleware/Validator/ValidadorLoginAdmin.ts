import {check, validationResult, ValidationChain} from 'express-validator';
import {Request, Response, NextFunction} from 'express';

export const ValidadorLoginAdmin : ValidationChain[] = [
    check('email').isEmail(),
    check('password').isLength({min: 8, max: 15})
];

export const validadorLA = (req: Request, res: Response, next: NextFunction) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(400).json({errors : errors.array})
    }
    next()
}   