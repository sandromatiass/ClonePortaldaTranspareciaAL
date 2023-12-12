import React from 'react';

interface ServidorInativo {
  proventos: string;
  nome: string;
  ano: number;
  cpf: string;
  funcionario_id: number;
  mes: number;
  total: string;
  vinculo: string;
  id: number | null;
  numero_ordem: number;
}

interface ServidoresInativosProps {
  servidoresInativos: ServidorInativo[];
}

const ServidoresInativos: React.FC<ServidoresInativosProps> = ({ servidoresInativos }) => {
  return (
    <div>
      <h2>Listagem de Servidores Inativos</h2>
      <table>
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome</th>
            <th>Vínculo</th>
            <th>Total (R$)</th>
          </tr>
        </thead>
        <tbody>
          {servidoresInativos.map((servidor) => (
            <tr key={servidor.funcionario_id}>
              <td>{servidor.cpf}</td>
              <td>{servidor.nome}</td>
              <td>{servidor.vinculo}</td>
              <td>{servidor.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServidoresInativos;
