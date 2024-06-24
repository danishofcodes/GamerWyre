import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
export default function Searchbar({handleInput,searchquery,handleFilters,handleShowAll}) {
  return (
    // <div>
    //     <input classNameName="" type="text"/>
    //     <button>search</button>
    // </div>


<div className="flex justify-start mb-5">
<form className="flex items-center max-w-sm">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        </div>
        <input type="text" id="simple-search" onChange={handleInput} value={searchquery} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-stone-500 focus:border-stone-500 block w-full ps-10 p-2.5  rounded-lg" placeholder="Search ..."  />
   {/* {console.log(searchquery)} */}
    </div>
    {/* <div type="button" className="p-2.5 ms-2 text-sm font-medium text-white bg-stone-700 rounded-lg border border-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-stone-600 dark:focus:ring-blue-800 rounded-[20px]">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </div> */}
</form>
<div class="inline-flex ms-2">
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l btncust border-r-2 border-[#94a3b8]" onClick={handleShowAll}>Show all</button>
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r btncust" onClick={handleFilters} ><FontAwesomeIcon icon={faFilter}/> filter </button>
</div>
{/* <button className="mx-3 g-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded btncust" onClick={handleShowAll}>Show all</button>
<button   className="btncust"><FontAwesomeIcon icon={faFilter}/> filter</button> */}
</div>

  )
}
