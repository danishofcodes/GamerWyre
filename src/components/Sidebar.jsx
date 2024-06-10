import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Category from './Category'
import PriceRange from './PriceRange'
import Suggested from './Suggested'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({handleChange, handleClick, handleRangeSelect,priceRange, handleShowAll, handleSidebar}) {
  return (
    <aside className='shrink-0 p-5'>
      <div className='text-end'><button onClick={handleSidebar}><FontAwesomeIcon icon={faTimes} /></button></div>
    <Category handleChange={handleChange} handleShowAll={handleShowAll}/>
     <PriceRange handleRangeSelect={handleRangeSelect} priceRange={priceRange}/>
     <Suggested handleClick={handleClick}/>
   </aside>
  )
}
