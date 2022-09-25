import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <LoadCountries></LoadCountries>
      
    </div>
  );
}

// data load kore ana api theke
function LoadCountries(){

  // step-1 (distructure)
  const [countries,setCountries]=useState([]);
  useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])

  return (
    <div>
      <h1>Visiting Every country of the world</h1>
      <h3>Avaleable Countries: {countries.length}</h3>
    </div>
  )
}

export default App;
