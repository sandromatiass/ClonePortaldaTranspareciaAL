import brasaoAl from "../../../assets/png/brasao_alagoas.png";
import { CCHeader } from "./CHeader.styles";

const CHeader = () => {
  return (
    <CCHeader>
      <img src={brasaoAl} alt="Brasão de Alagoas" />
      <p>Portal da</p>
      <p>Transparência</p>
      <p>Graciliano Ramos • Alagoas</p>
    </CCHeader>
  );
};

export default CHeader;