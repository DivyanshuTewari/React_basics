import { useState } from "react";
import useUser from "../contexts/userContext"

function Login(){
    const {user , setUser} = useUser();
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    function submitHandler(){
        setUser({username , password});
    }
    return(
        <>
        <div>
            <label htmlFor="un">Username :</label>
            <input type = "text" id="un" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <br/>
            <label htmlFor="pass">Password :</label>
            <input type="text" id="pass" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <br/>
            <button onClick={submitHandler}>Submit</button> 
            <br/>
        </div>
        </>
    )
}
export default Login