import './App.css';
import Navbar from './componentes/Navbar';
import Contador from './componentes/Contador';
import Footer from './componentes/Footer';
import Reloj from './componentes/Reloj';
import Form from './componentes/Form';
import Card from './componentes/Card';
import Pokemon from './componentes/Pokemon';


import TareaLista from './componentes/TareaLista';
function App() {
  const tareasIniciales = ['Hacer la compra', 'Limpiar la casa', 'Hacer ejercicio'];

  return (
    <div className="App">
      <Navbar />
      <Contador/>
      <Reloj/>
      <br></br>
      <TareaLista tareasIniciales={tareasIniciales}/>
      <br></br>
      <Form/>
      <Card/>
      <br></br>
      <Pokemon/>
      <br></br>

      <Footer/>

    </div>
  );
}

export default App;
