import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"


function App() {
  const [num,setNum]=useState();
  const [name,setName]=useState();
  const [move,setMove]=useState();

  useEffect(  ()=>{

    async function getData(){
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    setName(res.data.name)
    setMove(res.data.moves.length)
    }
    getData()
  })



  return (
    <div className="App">
      <h1>Get Pockemon Data</h1>
      <h2>You choose {num} value</h2>
      <h2>My name is {name}</h2>

      <h2>My moves are {move}</h2>


      <select value={num} onChange={(e)=>{
        setNum(e.target.value)
      }}>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="25">25</option>
      </select>
    </div>
  );
}

export default App;
//https://pokeapi.co/api/v2/pokemon/ditto