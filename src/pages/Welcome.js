import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Welcome=()=>{
    const navigate=useNavigate()
    const [users,setUsers]=useState([])

    const fetchData = useCallback(()=>{
        axios.get("http://localhost:4000/getusers").then(response=>{
            setUsers(response.data)

        }).catch((error)=>{
            console.error(error)
        })
    },[])

    useEffect(()=>{
        fetchData()
    },[fetchData])

    function  updateUser(user){
        navigate("/update",{state:{user:user}})


    }
    function deleteUser(user){
        axios.post("http://localhost:4000/deleteuser",{id:user.id}).then((response)=>{
            console.log(response.data)

        }).catch((error)=>{
            console.error(error)
        })

    }
    return(
        <>
         <h1 style={{"text-align":"center", backgroundColor:"#E7BCDE", 
        fontFamily:"bradley hand", fontSize:"60px", fontStyle:"bold", color:"#67729D"}}>Welcome!!!</h1>
               <br /><br /><br />

               <table style={{color:"#67729D",marginLeft:"420px",fontSize:"18px"}}>
                <tr style={{padding:"20px"}}>
                    <th style={{padding:"20px"}}>#</th>
                    <th style={{padding:"20px"}}>Name</th>
                    <th style={{padding:"20px"}}>Age</th>
                    <th style={{padding:"20px"}}>Mobile</th>
                    <th style={{padding:"20px"}}>Email</th>
                    <th style={{padding:"20px"}}>Actions</th>
                </tr>

                {users.map((u,i)=>{
                    return(<>
                    <tr>
                        <td key={u.id}>{i}</td>
                        <td>{u.name}</td>
                        <td>{u.age}</td>
                        <td>{u.mobile}</td>
                        <td>{u.email}</td>

                        <td>
                            <button onClick={()=>updateUser(u)} style={{"textalign":"center",fontSize:"14px",width:"100px",
                        borderRadius:"8px",background:"#67729D", color:"#E7BCDE", fontFamily:"bradley hand"}}>update</button>
                            <button onClick={()=>deleteUser(u)} style={{"textalign":"center",fontSize:"14px",width:"100px",
                        borderRadius:"8px",background:"#67729D", color:"#E7BCDE", fontFamily:"bradley hand"}}>delete</button>
                        </td>

                    </tr>
                    </>)
                })}
               </table>
            </>
    )
}