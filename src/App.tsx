import CHeader from "./shared/Components/CHeader/CHeader";
import CMain from "./shared/Components/CMain/CMain";
import GlobalStyles from "./shared/Styles";

function App() {

  const handleSearch = (query: string) => {
    console.log('Pesquisando por:', query);
  };

  return (
    <div>
      <GlobalStyles />
      <CHeader />
      <CMain onSearch={handleSearch} />
    </div>
  );
}

export default App;
