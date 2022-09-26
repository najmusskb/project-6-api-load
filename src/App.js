import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/person/Person';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">

      {/* <LoadCountries></LoadCountries> */}

      <Country></Country>
      <Person></Person>
      <Header></Header>
    
      
    </div>
  );                                                                                                                                                                                        
}


/* 

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
      {
        countries.map(country=><Country name={country.name.common} population={country.population} ></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name:{props.name}</h2>
      <h4>Population:{props.population}</h4>
    </div>
  )
} */

export default App;
