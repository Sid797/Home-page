const MainButton =()=>{
    return(
        <>
        <section className="bg-neutral-600 font-serif h-[20vh]">
        <button type="button" className="text-gray-900
         bg-white border border-gray-300 focus:outline-none 
         hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
          rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
         dark:bg-gray-800 dark:text-white dark:border-gray-600 
         dark:hover:bg-gray-700 dark:hover:border-gray-600 
         dark:focus:ring-gray-700 font-extrabold">Private</button>

        <button type="button" className="text-gray-900
         bg-white border border-gray-300 focus:outline-none 
         hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
         font-extrabold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
         dark:bg-gray-800 dark:text-white dark:border-gray-600 
         dark:hover:bg-gray-700 dark:hover:border-gray-600 
         dark:focus:ring-gray-700">Create Room</button>
        </section>         
        </>
    )
}
export default MainButton