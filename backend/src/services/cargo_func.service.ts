// import { pool } from "../database/connection.js";
// import { CargoFunc, CriarCargoFunc } from "../types/cargo_func.js";

// class CargoFuncService {
//   async getAll(): Promise<CargoFunc[]> {
//     const res = await pool.query<CargoFunc>("SELECT * FROM cargo_func");

//     return res.rows;
//   }

//   async getById(id: string): Promise<CargoFunc[]> {
//     const res = await pool.query<CargoFunc>(
//       "SELECT * FROM cargo_func WHERE id = $1",
//       [id],
//     );

//     return res.rows;
//   }

//   async create(dados: CriarCargoFunc): Promise<CargoFunc> {
//     const res = await pool.query<CargoFunc>(
//       `INSERT INTO cargo_func
//         (nome)
//        VALUES ($1)
//        RETURNING *`,
//       [dados.nome],
//     );

//     const cargo = res.rows[0];

//     if (!cargo) {
//       throw new Error("O banco não retornou o cargo cadastrado");
//     }

//     return cargo;
//   }
// }

// export const cargoFuncService = new CargoFuncService();

import { CargoFunc, CriarCargoFunc } from "../types/cargo_func.js";
import { cargoFuncRepository } from "../repository/cargo_func.repository.js";

class CargoFuncService {
  async getAll(): Promise<CargoFunc[]> {
    return await cargoFuncRepository.getAll()
  }
  async getById(id: string): Promise<CargoFunc[]> {
    if (!id) {
      throw new Error("O Id é obrigatório para consultar o cargo");
    }
    return await cargoFuncRepository.getById(id)
  }
  async create(dados: CriarCargoFunc): Promise<CargoFunc> {
    if (!dados.nome) {
      throw new Error("O nome é obrigatório");
    }
    const cargoFunc = cargoFuncRepository.create(dados)
    if (!cargoFunc) {
      throw new Error("O banco não retornou o funcionario cadastrado")
    }
    return cargoFunc
  }
}

export const cargoFuncService = new CargoFuncService()