import { Link, NavLink } from "react-router-dom"

function Header(){
    return(
        <>
        <div className = "flex justify-between items-center px-4  mb-3">
            <Link to="/" className = "flex text-xl font-bold" >
                <h1 className="text-gray-700">REACT</h1><h1 className="text-orange-400">APP</h1>
            </Link>  
            <div>
                <ul className=" list-none flex justify-center gap-5 text-gray-500 font-bold">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>  
                    <li>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/github">GitHub</NavLink>
                    </li>  
                </ul>                               
                
            </div>  
            <div>
                <NavLink to="/login" className="text-gray-500 font-bold px-4">Log in</NavLink>
                <button className="bg-orange-600 text-white font-bold rounded-2xl p-2">Get Started</button>
            </div>     
        </div>
        <hr className="border-gray-400"></hr>
        </>
    )
}
export default Header