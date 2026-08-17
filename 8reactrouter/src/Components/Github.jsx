import { useState } from "react";
import { useEffect } from "react";

function Github ()
{
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response) => response.json())
        .then((response) => setData(response))
    },[])
    return(
        <>
            <h1 className="text-gray-600 text-5xl font-bold m-45"> Github followers: {data.followers}</h1>
        </>
    )
}
export default Github;