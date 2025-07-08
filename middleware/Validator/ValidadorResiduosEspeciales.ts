import { check, validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validadorResiduosEspeciales: ValidationChain[] = [
    check('zona').isLength({ min: 5, max: 255 }),
    check('fecha_solicitud').isDate(),
    check('cantidad').isNumeric(),
    check('tipo_residuo').isLength({ min: 3, max: 100 }),
    check('tamano').isLength({ min: 3, max: 100 })
];

export const validadorRE = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}