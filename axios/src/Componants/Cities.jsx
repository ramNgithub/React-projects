import axios from "axios";
import {useState,useEffect} from "react";

const Cities=()=>{
const [data,setData]=useState([]);
const [page,setPage]=useState(1);

const getData=(params={})=>{
    return axios.get(`http://localhost:3000/cities`,{
        params:{
    _page:params.page,
    _limit:params.limit
        }
    })
 
}

useEffect(()=>{
getData({page, limit:5}).then((res)=>setData(res.data))

},[page])


return (
    <div>
        {
            data.map((el)=><p key={el.id}>{el.name}</p>)
        }
        <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
        <button>{page}</button>
        <button onClick={()=>setPage(page+1)}>NEXT</button>

    </div>
)


}

export default Cities;