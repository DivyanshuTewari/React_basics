import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer (){
    return(
        <>
        <hr className="border-gray-400"></hr>
        <div className="flex justify-between p-4">
            <Link to="/" className = "flex text-3xl font-bold m-7" >
                <h1 className="text-gray-700">REACT</h1><h1 className="text-orange-400">APP</h1>
            </Link>
            <div className="flex justify-between">
                <div>
                <ul className="list-none text-left p-5">
                    <li className="font-bold ">RESOURCES</li>
                    <li><Link to="/" className="text-gray-500">Home</Link></li>
                    <li><Link to="/" className="text-gray-500">About</Link></li>
                </ul>
            </div>
            <div>
                <ul className="list-none text-left p-5">
                    <li className="font-bold ">FOLLOW US</li>
                    <li><Link to="/" className="text-gray-500">Github</Link></li>
                    <li><Link to="/" className="text-gray-500">Discord</Link></li>
                </ul>
            </div>
            <div>
                <ul className="list-none text-left p-5">
                    <li className="font-bold ">LEGAL</li>
                    <li><Link to="/" className="text-gray-500">Terms and Conditions</Link></li>
                    <li><Link to="/" className="text-gray-500">Privacy Policy</Link></li>
                </ul>
            </div>
            </div>
        </div>
        <hr className="border-gray-400"></hr>
        <div className="flex justify-between m-3 p-3">
            <h1 className="">Made with love by Divyanshu Tewari</h1>
            <div className="flex justify-between text-gray-700 gap-4">
                <FaFacebook size={20}></FaFacebook>
                <FaGithub size={20}></FaGithub>
                <FaYoutube size={20}></FaYoutube>
            </div>
        </div>
        <hr className=" border-gray-400" />
        </>
    )
        
    
}
export default Footer