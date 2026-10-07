import { NextFunction, type Request, type Response } from "express";
import { request } from "node:http";

export const ensureAuth2 = (
    request: Request,
    Response: Response,
    next: NextFunction
) => {
    const authHeader = request.headers.authorization

    if(!authHeader) {
        return Response.status(401).json({message: "Não foi provida autorização"})
    }

    const [,token] = authHeader

    if(!token) {
        return Response.status(401).json({ message: "Formato de token inválido"})
    }

    
}