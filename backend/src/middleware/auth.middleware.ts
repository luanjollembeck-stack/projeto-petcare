import { NextFunction, type Request, type Response } from "express";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export interface JwtPayLoad{
    id_func: string,
    nome: string
    email: string,
}

export interface AuthReq extends Request{
    user?: JwtPayLoad
}

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

    const JWT_SECRET = process.env.JWT_SECRET

    if(!JWT_SECRET) {
        return  Response.status(500).json({ message: "Chave não encontrada"})
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayLoad

        Request.user = decoded

        return next()
    } catch (error) {
        return Response.status(401).json({ message: "JWT inválido ou expirado"})
    }
}