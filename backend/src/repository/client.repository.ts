import { pool } from "../database/connection.js";
import { Cliente } from "../types/cliente.js";

class ClientRepository {
    async getAll(): Promise<Cliente[]> {
        const res = await pool.query<Cliente>("SELECT * FROM clientes");
        return res.rows;
    }

    async getById(id: string): Promise<Cliente[]> {
        const res = await pool.query<Cliente>(
            "SELECT * FROM clientes WHERE id = $1", [id]
        );
        return res.rows;
    }

    async create(dados: Cliente): Promise<Cliente> {
        const res = await pool.query<Cliente>(
            `INSERT INTO clientes(nome)VALUES ($1)RETURNING *`,[dados.nome],
        );
        const cargo = res.rows[0];
        if (!cargo) {
            throw new Error("O banco não retornou o cliente cadastrado");
        }
        return cargo;
    }
}

export const clientRepository = new ClientRepository()