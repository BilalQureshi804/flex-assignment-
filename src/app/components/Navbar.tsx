const Navbar =() => {
    return(
        <nav className="bg-blue-600 h-44 w-full flex justify-around items-center">
            {/* Logo */}
            <div className="h-10 w-32 bg-white"></div>

            {/* Subtitle */}
            <div className="w-64 h-10 bg-yellow-600"></div>

            {/* Nav Link */}
            <ul className="flex">
                <li className="bg-pink-700 h-10 w-32"></li>
                <li className="bg-lime-800 h-10 w-32"></li>
                <li className="bg-yellow-900 h-10 w-32"></li>
            </ul>
        </nav>
    )
}
export default Navbar;