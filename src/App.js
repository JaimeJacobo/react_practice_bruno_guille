import './App.css';
import { Card } from './components/Card'
import { PokemonImage } from './components/PokemonImage';

// JSX
function App() {
  return (
    <div className="App">
      <h1>Welcome to React!</h1>  
      <Card />
      <PokemonImage />
    </div>
  );
}

export default App;

// Crear un componente que se llame PokemonImage. Este componente debe renderizar una imagen de un pokemon. Podeis coger la imagen de google. 