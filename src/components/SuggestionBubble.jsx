
export default function SuggestionBubble({handleClick,value}) {
  return (
    <button className='truncate bg-gray-900  hover:bg-[#ff9513] text-white rounded-md px-2 py-1' onClick={handleClick} value={value}>{value}</button>
  )
}
