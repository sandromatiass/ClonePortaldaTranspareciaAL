import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface Server {
  id: number;
  nome: string;
  salario: number;
}

interface ServidoresAtivosProps {
  searchQuery: string;
  limit: number;
}

const ServidoresAtivos: React.FC<ServidoresAtivosProps> = ({ searchQuery, limit }) => {
  const [servidoresAtivos, setServidoresAtivos] = useState<Server[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/pessoal/json-servidores/', {
          params: {
            ano: 2015,
            mes: 9,
            limit,
            status: 'ativo',
            nome: searchQuery,
          },
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': 'Bearer SeuTokenDeAutenticacao',
            'Outro-Header': 'Valor-Outro-Header',
          },
        });

        setServidoresAtivos(response.data);
        setError(null);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          console.error('Erro na requisição:', axiosError);
          setError(axiosError.message);
        } else {
          console.error('Erro na requisição:', error);
          setError('Erro desconhecido');
        }
      }
    };

    fetchData();
  }, [searchQuery, limit]);

  if (error) {
    return <div>Erro na requisição: {error}</div>;
  }

  return (
    <div>
      <h2>Servidores Ativos</h2>
      <ul>
        {servidoresAtivos.map((server) => (
          <li key={server.id}>
            {server.nome} - Salário: {server.salario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServidoresAtivos;
