import express, { type Request, type Response } from "express"
import { randomUUID } from "node:crypto"
import { pool } from "./database/connection.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/cliente")

app.get("/health", (_request: Request, response: Response) => {
    return response.json({
        status: "ok"
    })
})

app.get("/", async (_request: Request, response: Response) => {
    try{
        const res = await pool.query("SELECT * FROM clientes")
        
        response.json(res)
    }catch (error) {
        console.error(error);
    }
})

interface CreateUserBody {
    name: string;
}

app.post("/users", (request: Request<object, object,
    CreateUserBody>, Response: Response) => {
    const name = request.body.name?.trim()
        if(!name) {
            return Response.status(400).json({
                error: "Name is required"
            })
        }

        return Response.status(201).json({
            id: randomUUID(),
            name
        })
})




app.listen(port,()=> {
    console.log(`API rodando em http://localhost:${port}`);
})
