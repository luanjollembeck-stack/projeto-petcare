import { type Request, type Response } from "express"
import { clientService } from '../services/client.service.js'
import { CriarCliente } from "../types/cliente.js"

class Client {
    async get(_request: Request, response: Response) {
        try {
            const res = await clientService.getAll();
            return response.json(res);
        } catch (error) {
            console.log(error);

            return response.status(500).json({
                error: "Erro Interno",
            });
        }
    };

    async post(request: Request<CriarCliente>, response: Response) {
        try {
            const dados = request.body;
            const cargo = await clientService.create(dados);
            return response.status(201).json(cargo);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                error: "Erro interno",
            });
        }
    }

    async getById(request: Request<{ id: string }>, response: Response) {
        const { id } = request.params;
        try {
            const res = await clientService.getById(id);
            return response.json(res);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                error: "Erro interno",
            });
        }
    }

    async patch(request: Request<{ id: string }>, response: Response) {
        const { id } = request.params;
        try {
            const res = await clientService.inativarCliente(id);
            return response.json(res);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                error: "Erro interno",
            });
        }
    }
}

export const clienteController = new Client()