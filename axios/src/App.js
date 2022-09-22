import './App.css';
import {useState,useEffect} from "react"
import Todos from "./Componants/Todos"
import Cities from "./Componants/Cities"
function App() {
  
  return (
    <div className="App">
      <h1>Hello folks</h1>
      <Cities/>
    </div>
  );
}

export default App;
