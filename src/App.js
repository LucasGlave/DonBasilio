import './App.scss';
import Footer from './componentes/Header/Header';
import Header from './componentes/Footer/Footer';
import SobreMi from './componentes/SobreMi/SobreMi';
import SacarTurno from './componentes/SacarTurno/SacarTurno';
// import Clientes from './componentes/Clientes/Clientes';
import Ubicacion from './componentes/Ubicacion/Ubicacion';

function App() {
  return (
    <div className="App">
      <Footer/>
      <SobreMi/>
      <SacarTurno/>
      {/* <Clientes/> */}
      <Ubicacion/>
      <Header/>
    </div>
  );
}

export default App;
