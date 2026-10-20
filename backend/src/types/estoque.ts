export interface Estoque {
  data: string;
  id_animal: string;
  id_medico: string;
  id_servico: string;
}

export interface CriarEstoque {
  nome: string
  descricao: string
  quantidade: string
  valor: string
  dt_validade: string
}
