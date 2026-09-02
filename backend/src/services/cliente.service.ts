import { pool } from "../database/connection.js"

class ClienteService {
    async getAll() {
        const res = await pool.query("SELECT * FROM clientes")

        return res.rows
    } catch (error) {
        console.error(error);
    }
}

export const clienteService = new ClienteService()