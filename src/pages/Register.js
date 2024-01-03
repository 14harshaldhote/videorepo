import axios from 'axios'
import { useState } from 'react'

export const Register=()=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    function saveUser(){

        axios.post("http://127.0.0.1:4000/Register",{name,age,mobile,email,password}).then((response)=>{
            console.log(response.data)
            alert("Registered Successfully....")
        }).catch((error)=>{
console.error(error)
        })
    }

    return(
        <>
        <h1 style={{"text-align":"center", backgroundColor:"#E7BCDE", 
        fontFamily:"bradley hand", fontSize:"60px", fontStyle:"bold", color:"#67729D"}}>Register here...</h1>
        <br /><br /><br />


        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' 
        style={{"text-align":"center",marginLeft:"450px", padding:"10px",fontSize:"18px",width:"500px",borderRadius:"15px",borderColor:"#E7BCDE"}}/>
        <br /><br />
        <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter age'  style={{"text-align":"center",marginLeft:"450px", padding:"10px",fontSize:"18px",width:"500px",borderRadius:"15px",borderColor:"#E7BCDE"}}/>
        <br /><br />
        <input type='tel' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter mobile'  style={{"text-align":"center",marginLeft:"450px", padding:"10px",fontSize:"18px",width:"500px",borderRadius:"15px",borderColor:"#E7BCDE"}}/>
        <br /><br />
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' style={{"text-align":"center",marginLeft:"450px", padding:"10px",fontSize:"18px",width:"500px",borderRadius:"15px",borderColor:"#E7BCDE"}}/>
        <br /><br />
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'  style={{"text-align":"center",marginLeft:"450px", padding:"10px",fontSize:"18px",width:"500px",borderRadius:"15px",borderColor:"#E7BCDE"}}/>
        <br /><br />
        

        <button onClick={saveUser} style={{"text-align":"center", backgroundColor:"#67729D", padding:"10px", borderRadius:"15px",width:"400px",
        fontFamily:"bradley hand", fontSize:"32px", fontStyle:"bold", color:"#E7BCDE", marginLeft:"510px"}}>Register</button>

        </>
    )
}