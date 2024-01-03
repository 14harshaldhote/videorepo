import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    function authUser(){
        axios.post("http://127.0.0.1:4000/login",{email,password}).then((response)=>{
          if(response.data==true){
            navigate("/Welcome")
          }
        }).catch((error)=>{
            console.error(error)
        })
    }

    return(
        <>
         <h1 style={{"text-align":"center", backgroundColor:"#E7BCDE", 
        fontFamily:"bradley hand", fontSize:"60px", fontStyle:"bold", color:"#67729D"}}>Let's Login</h1>
        <br /><br /><br />

        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' style={{"text-align":"center",marginLeft:"450px", padding:"10px",fontSize:"18px",width:"500px",borderRadius:"15px",borderColor:"#E7BCDE"}}/>
        <br /><br />
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'  style={{"text-align":"center",marginLeft:"450px", padding:"10px",fontSize:"18px",width:"500px",borderRadius:"15px",borderColor:"#E7BCDE"}}/>
        <br /><br />
        
        <button onClick={authUser} style={{"text-align":"center", backgroundColor:"#67729D", padding:"10px", borderRadius:"15px",width:"400px",
        fontFamily:"bradley hand", fontSize:"32px", fontStyle:"bold", color:"#E7BCDE", marginLeft:"510px"}}>login</button>

        </>
    )

    }