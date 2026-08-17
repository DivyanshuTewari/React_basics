import { FaGooglePlay } from "react-icons/fa";
function Home(){
    return(
        <>
        <div className = "flex justify content">
            <img src="https://tse3.mm.bing.net/th/id/OIP.FDSz8mbLwJ76CpVoOqKWQAHaFC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" className="p-25"></img>
            <div>
                <h1 className="font-bold text-6xl pt-45 text-gray-600">Download Now</h1>
                <h3 className="font-bold text-4xl pt-5 text-gray-700">Google Play</h3>
                <button className="bg-orange-600 rounded-2xl text-white m-10 p-4 font-bold"><div className="flex "><FaGooglePlay size={24}/> <div className="pl-2">Download Now</div></div></button>
            </div>
        </div>
        </>
    )
}
export default Home