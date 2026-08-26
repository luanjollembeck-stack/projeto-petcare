import  express, {type Request, type Response}  from "express"
import { randomUUID } from "node:crypto"

const app = express()
const port = 3000

app.use(express.json())

app.get("/health", (_request: Request, response: Response) => {
    return response.json({
        status: "ok"
    })
})

interface CreateUserBody{
    name: string;
}

app.post("/users", (request: Request<object, object, CreateUserBody>, response: Response) => {
    const name = request.body.name?.trim()
    if(!name) {
        return response.status(400).json({
            error: "Nme is required"
        })
    }
})

app.listen(port,() => {
    console.log(`API rodando em http://localhost:${port}`)
})

