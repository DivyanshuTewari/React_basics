import useUser from "../contexts/userContext"

function User(){
    const{user} = useUser();
    if(!user){
        return(
            <div>NO VALID USER</div>
        )
    }
    else{
        return(
        <>
            <div> ID ---- {user.username} </div>
            <div> PASS ---- {user.password}</div>
        </>
    )
    }    
}
export default User