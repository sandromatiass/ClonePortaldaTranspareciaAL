import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Server {
  id: number;
  nome: string;
  salario: number;
}

interface ServidoresInativosProps {
  searchQuery: string;
  limit: number;
}

const ServidoresInativos: React.FC<ServidoresInativosProps> = ({ searchQuery, limit }) => {
  const [servidoresInativos, setServidoresInativos] = useState<Server[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/pessoal/json-servidores/?status=inativo&nome=${searchQuery}&limit=${limit}`);
        setServidoresInativos(response.data);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, [searchQuery, limit]);

  return (
    <div>
      <h2>Servidores Inativos</h2>
      <ul>
        {servidoresInativos.map((server) => (
          <li key={server.id}>
            {server.nome} - Salário: {server.salario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServidoresInativos;
