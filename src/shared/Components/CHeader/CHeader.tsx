import brasaoAl from "../../../assets/png/brasao_alagoas.png";
import { CCHeader } from "./CHeader.styles";

const CHeader = () => {
  return (
    <CCHeader>
      <div>
        <img src={brasaoAl} alt="Brasão de Alagoas" />
      </div>
      <div>
        <p>Portal da</p>
        <strong>Transparência</strong>
        <p>Graciliano Ramos • Alagoas</p>
      </div>
      
    </CCHeader>
  );
};

export default CHeader;