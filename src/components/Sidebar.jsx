import Category from './Category'
import PriceRange from './PriceRange'
import Suggested from './Suggested'

export default function Sidebar({handleChange, handleClick, handleRangeSelect,priceRange, handleShowAll}) {
  return (
    <aside className='shrink-0 p-5'>
    <Category handleChange={handleChange} handleShowAll={handleShowAll}/>
     <PriceRange handleRangeSelect={handleRangeSelect} priceRange={priceRange}/>
     <Suggested handleClick={handleClick}/>
   </aside>
  )
}
