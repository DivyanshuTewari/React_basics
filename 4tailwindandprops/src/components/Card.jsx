function Card({username: name = "Divy" , btntxt : txt = "visit me"}) {
    console.log(name,txt)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
                className="w-full"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Card Image"
            />
            <div className="px-6 py-4">
                <h2 className="font-bold text-red-400 text-xl mb-2">{name}</h2>
                <p className="text-gray-700 text-base">
                    This is a simple card with an image, title, and description
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {txt}
                </button>
            </div>
        </div>
    )
}
export default Card;