import {useState,useEffect} from "react";
import axios from "axios"

function Todos(){
    const [todos, setTodos]=useState([])

    const getData=()=>{
        return axios.get(`  http://localhost:3000/todos`)
    }

  useEffect(()=>{
    getData().then((res)=>setTodos(res.data))
  })

   return (
    <div>
        {
            todos.map((el)=><p key={el.id}>{el.title}</p>)
        }
    </div>
   )


}

export default Todos;