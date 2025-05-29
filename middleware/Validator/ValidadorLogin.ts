import { check, ValidationChain, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validatorLogin: ValidationChain[] = [
    check('email').isEmail(),
    check('password').isLength({ min: 8, max: 15 }),
];

export const validadorL = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
