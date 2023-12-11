import React, { useState, ChangeEvent } from "react";
import ServidoresAtivos from "../../Data/ServidoresAtivos/ServidoresAtivos";
import ServidoresInativos from "../../Data/ServidoresInativos/ServidoresInativos";

interface CMainProps {
  onSearch: (query: string, mostrarAtivos: boolean, mostrarInativos: boolean, limit: number) => void;
}

const CMain: React.FC<CMainProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mostrarAtivos, setMostrarAtivos] = useState<boolean>(true);
  const [mostrarInativos, setMostrarInativos] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(10);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery, mostrarAtivos, mostrarInativos, limit);
  };

  const handleCheckboxChange = (tipo: 'ativos' | 'inativos') => {
    if (tipo === 'ativos') {
      setMostrarAtivos(!mostrarAtivos);
    } else {
      setMostrarInativos(!mostrarInativos);
    }
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    setLimit(newLimit);
  };

  return (
    <div>
      <p>Consultar dados dos servidores ativos e inativos</p>
      <input 
        type="text" 
        placeholder="Pesquisar..." 
        value={searchQuery}
        onChange={handleChange}
      />

      <div>
        <label>
          <input
            type="checkbox"
            checked={mostrarAtivos}
            onChange={() => handleCheckboxChange('ativos')}
          />
          Mostrar Ativos
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={mostrarInativos}
            onChange={() => handleCheckboxChange('inativos')}
          />
          Mostrar Inativos
        </label>
      </div>

      <div>
        <label>
          Exibir:
          <input
            type="number"
            value={limit}
            onChange={handleLimitChange}
          />
          servidores por vez
        </label>
      </div>

      <button onClick={handleSearch}>Pesquisar</button>

      {mostrarAtivos && <ServidoresAtivos searchQuery={searchQuery} limit={limit} />}
      {mostrarInativos && <ServidoresInativos searchQuery={searchQuery} limit={limit} />}
    </div>
  );
};

export default CMain;
