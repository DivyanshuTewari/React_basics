import { useParams } from "react-router-dom"
function User(){
    const {userId , sec} = useParams();
    return (
        <>
        <div className = "flex justify-center">
            <h1 className="text-gray-600 text-5xl font-bold my-45 ">USER :</h1>
            <h1 className="text-orange-500 text-5xl font-bold my-45 ml-5">{userId}</h1>
            <h1 className="text-orange-500 text-5xl font-bold my-45 ml-5">{sec}</h1>
        </div>
        
        </>
    )
}
export default User