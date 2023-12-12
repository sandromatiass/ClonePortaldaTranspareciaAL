import { useState } from 'react';
import ServidoresAtivos from '../../Data/ServidoresAtivos/ServidoresAtivos';
import ServidoresInativos from '../../Data/ServidoresInativos/ServidoresInativos';

const servidoresAtivos = require('../../Data/ServidoresAtivos/ServidoresAtivos.json');
const servidoresInativos = require('../../Data/ServidoresInativos/ServidoresInativos.json');

import "./styles.css"

interface ServidoresData {
  servidoresAtivos: any[];
  servidoresInativos: any[];
}

const CMain = () => {
  const [mostrarAtivos, setMostrarAtivos] = useState<boolean>(false);
  const [mostrarInativos, setMostrarInativos] = useState<boolean>(false);

  const ultimosInativos = servidoresInativos.servidoresInativos.slice(-12);
  const primeirosAtivos = servidoresAtivos.servidoresAtivos.slice(0, 12);

  const handleCheckboxChange = (tipo: 'ativos' | 'inativos') => {
    if (tipo === 'ativos') {
      setMostrarAtivos(!mostrarAtivos);
      setMostrarInativos(false);
    } else {
      setMostrarInativos(!mostrarInativos);
      setMostrarAtivos(false);
    }
  };

  return (
    <div>
      <div className='checkBox'>
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
      </div>
     
      <p className='fraseOrientadora'>
        {mostrarAtivos && mostrarInativos
          ? 'Você está verificando a lista de servidores ativos e inativos'
          : mostrarAtivos
          ? 'Você está verificando a lista de servidores ativos'
          : mostrarInativos
          ? 'Você está verificando a lista de servidores inativos'
          : 'Por favor, selecione acima para verificar os dados dos servidores.'}
      </p>

      {mostrarAtivos && <ServidoresAtivos servidoresAtivos={primeirosAtivos} />}
      {mostrarInativos && <ServidoresInativos servidoresInativos={ultimosInativos} />}
    </div>
  );
};

export default CMain;
