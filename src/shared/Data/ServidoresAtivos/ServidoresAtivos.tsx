interface ServidorAtivo {
  horas_extras: string;
  codigo_orgao: string;
  nome: string;
  ano: number;
  cpf: string;
  funcionario_id: number;
  mes: number;
  descricao_orgao: string;
  total: string;
  id: number;
  numero_ordem: number;
}

interface ServidoresAtivosProps {
  servidoresAtivos: ServidorAtivo[];
}

const ServidoresAtivos = ({ servidoresAtivos }: ServidoresAtivosProps) => {
  return (
    <div>
      <h2>Listagem de Servidores Ativos</h2>
      <table>
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Órgão</th>
            <th>Total Líquido (R$)</th>
          </tr>
        </thead>
        <tbody>
          {servidoresAtivos.map((servidor) => (
            <tr key={servidor.id}>
              <td>{servidor.cpf}</td>
              <td>{servidor.nome}</td>
              <td>{servidor.descricao_orgao}</td>
              <td>{servidor.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServidoresAtivos;
