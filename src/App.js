import './App.css';
import { useState, useEffect } from 'react';
import { CountryCard } from './components/CountryCard';
function App() {
// JavaScript
const flagsApiUrl = 'https://restcountries.com/v3.1/all?fields=name,flag,languages';
 
const [currentCountries, setCurrentCountries] = useState([])

useEffect(()=>{
  getFlagsApi()
}, [])

const getFlagsApi = async () => {
    const ApiCallResult = await fetch(flagsApiUrl); // llamada a la web de paises
    const data = await ApiCallResult.json() // Convertir la info a JSON (para que JS pueda leerlo)
    setCurrentCountries(data)
}

  return (
    // JSX
    <div className="App"> 
      {/* <h1>{currentCountries.length === 0 ? 'Loading...' : currentCountries[0].name.common}</h1> */}
      <CountryCard />
    </div>
  );
}

export default App;


// https://image.shutterstock.com/image-vector/vector-graphic-no-thumbnail-symbol-260nw-1391095985.jpg