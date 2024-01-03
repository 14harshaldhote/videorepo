import {Link, Outlet} from "react-router-dom"
export const Menu=()=>

{
    return(
        <>
        <h1 style={{"text-align":"center", backgroundColor:"#E7BCDE", "fontFamily":"bradley hand", fontSize:"58px", fontStyle:"bold", color:"#67729D"}}>Hello User!!!</h1>
        <nav style={{backgroundColor:"#67729D",height:"50vh"}}>
        <br /><br /><br /><br /><br /><br />
        <Link to="Register" style={{textAlign:"center",fontFamily:"bradley hand", fontSize:"38px",color:"#ffffff",justifyContent:"center",alignItems:"center",display:"block",textDecoration:"none"}}>Register</Link>
        <br /><br />
        <Link to="login" style={{textAlign:"center",fontFamily:"bradley hand", fontSize:"38px",color:"#ffffff",justifyContent:"center",alignItems:"center","textAlign":"center",display:"block",textDecoration:"none"}}>Login</Link>
                
            </nav>
            <Outlet/>
        </>
    )
}