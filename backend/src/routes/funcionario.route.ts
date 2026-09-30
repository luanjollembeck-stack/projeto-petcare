import { Router, type Request, type Response } from "express"
import { funcionarioService } from "../services/funcionario.service.js"
import { CriarFuncionario } from "../types/funcionario.js"

export const funcionarioRouter = Router()

funcionarioRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const res = await funcionarioService.getAll()
        return response.json(res)
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})

funcionarioRouter.get("/:id", async (_request: Request<{id: string}> , response: Response) => {
    const { id } = _request.params
    try {
        const res = await funcionarioService.getById(id)
        return response.json(res)
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})

funcionarioRouter.post("/", async (request: Request<{}, {}, CriarFuncionario>, response: Response) => {
    try {
        const dados = request.body

        const cliente = await funcionarioService.create(dados)
        return response.status(201).json(cliente)
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})