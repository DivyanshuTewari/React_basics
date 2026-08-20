import { useContext, useState } from "react"
import userContext from "../context/UserContext";

function Login(){
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const {setUser} = useContext(userContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username , password})
    }
    return(
        <>
        <div>
            <h2>
                Login
            </h2>
            <label htmlFor="un">Username : </label>
            <input id="un" value={username} type='text' placeholder="Enter UserName" onChange={(e)=>setUsername(e.target.value)}></input>
            <label htmlFor="pass">Password : </label>
            <input id="pass" value={password} type="text" placeholder="Enter PassWord" onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
    
}
export default Login