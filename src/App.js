import './App.scss';
import Footer from './componentes/Header/Header';
import Header from './componentes/Footer/Footer';
import SacarTurno from './componentes/SacarTurno/SacarTurno';
// import Clientes from './componentes/Clientes/Clientes';
import Ubicacion from './componentes/Ubicacion/Ubicacion';
import HomePage from './componentes/HomePage/HomePage';
import SobreMi from './componentes/SobreMi/SobreMi';

function App() {
  return (
    <div className="App">
      <Footer/>
      <HomePage/>
      <SobreMi/>
      <SacarTurno/>
      <div>
        <Ubicacion/>
        <Header/>
      </div>
    </div>
  );
}

export default App;
