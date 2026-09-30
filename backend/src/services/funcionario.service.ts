import { pool } from "../database/connection.js";
import { Funcionario, CriarFuncionario } from "../types/funcionario.js";

class FuncionarioService {
    async getAll(): Promise<Funcionario[]> {
        const res = await pool.query<Funcionario>("SELECT * FROM funcionario")
        return res.rows
    }

    async getById (id: string): Promise<Funcionario[]> {
        const res = await pool.query<Funcionario>("SELECT * FROM funcionario WHERE id = $1", [id])
        return res.rows
    }

    async create(dados: CriarFuncionario): Promise<Funcionario> {
        const res = await pool.query<Funcionario>(`INSERT INTO funcionario (nome, email, senha, id_cargo) VALUES ($1, $2, $3, $4) RETURNING *`, [dados.nome, dados.email, dados.senha, dados.id_cargo])
        const funcionario = res.rows[0]

        if (!funcionario) {
            throw new Error("O banco não retornou o funcionario cadastrado");
        }

        return funcionario
    }
}
export const funcionarioService = new FuncionarioService()