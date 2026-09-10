import express, { Router, type Request, type Response } from "express"
import { clienteService } from "../services/cliente.service.js"

export const clienteRouter = Router() 

clienteRouter.get("/cliente", async (_request: Request, response: Response) => {
    try{
        const res = await clienteService.getAll()
        
        response.json(res)
    }catch (error) {
        console.error(error);
    }
})