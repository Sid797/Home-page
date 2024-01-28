const Header=()=>{
    return (
        <>
    <nav className="bg-white border-gray-200
        px-4 lg:px-6 py-2.5 dark:bg-neutral-900 h-[8vh]">
        <div className="flex flex-wrap justify-between
        items-start mx-auto max-w-screen-xl font-serif">
            <a  className="flex items-center">
                <span className="text-xl self-center 
                font-semibold text-cyan-500
                whitespace-nowrap ">
                    CommuniDraw!</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="#" className="text-gray-800
                 dark:text-white hover:bg-gray-50 
                focus:ring-4 focus:ring-gray-300 font-medium 
                rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 
                dark:hover:bg-gray-700 focus:outline-none 
                dark:focus:ring-gray-800">Log in</a>
                <a href="#" className="text-black bg-white 
                hover:bg-slate-200 font-bold focus:ring-4 focus:ring-primary-300 
                 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 
                mr-2 dark:bg-primary-600 
                dark:hover:bg-primary-700 focus:outline-none 
                dark:focus:ring-primary-800">Get started</a>
            </div>       
        </div>
    </nav>

        </>
    )
}
export default Header