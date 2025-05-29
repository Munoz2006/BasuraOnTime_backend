import { check, validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validatorRegister : ValidationChain[] = [
    check('email').isEmail(),
    check('password').isLength({ min: 8 , max: 15 }),
    check('nombres').isLength({ min: 3, max: 20 }),
    check('apellidos').isLength({ min: 3, max: 20 })
];

export const validadorR = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
