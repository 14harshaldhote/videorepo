import axios from 'axios'
import { useEffect, useState } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'



export const Update=()=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const navigate = useNavigate()

    const params =useLocation()
    console.log(params.state.user)
    const user = params.state.user
    const [failed,setFailed]=useState(false)


    useEffect(()=>{
        setName(user.name)
        setAge(user.age)
        setMobile(user.mobile)
        setEmail(user.email)
    },[])

    function updateUser(){

        axios.post("http://127.0.0.1:4000/update",{id:user.id,name,age,mobile,email}).then((response)=>{
            if(response.data){
                setFailed(response.data)
                setTimeout(()=>{
                    navigate("/Welcome")
                },2000)
            }
            else{
                setFailed(response.data)
            }
        }).catch((error)=>{
            console.error(error)
        })
    }

    return(
        <>
        <h1 style={{"text-align":"center", backgroundColor:"#E7BCDE", 
        fontFamily:"bradley hand", fontSize:"60px", fontStyle:"bold", color:"#67729D"}}>Welcome!!!</h1>
               <br /><br /><br />

               <h3>{failed ? "update success":"update failed"}</h3>

               <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' />
               <input type='number' value={age} onChange={(e)=>setName(e.target.value)} placeholder='Enter age' />
               <input type='tel' value={mobile} onChange={(e)=>setName(e.target.value)} placeholder='Enter mobile' />
               <input type='email' value={email} onChange={(e)=>setName(e.target.value)} placeholder='Enter email' />

               <button onClick={updateUser} style={{"text-align":"center", backgroundColor:"#67729D", padding:"10px", borderRadius:"15px",width:"400px",
        fontFamily:"bradley hand", fontSize:"32px", fontStyle:"bold", color:"#E7BCDE", marginLeft:"510px"}}>Update</button>
        </>
    )
}