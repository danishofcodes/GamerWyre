import React from 'react'
import SuggestionBubble from './SuggestionBubble'

export default function Suggested({handleClick}) {
  
  let recommend = ["Video Game", "FIFA 22", "HyperX Cloud II Gaming Headset", "PlayStation 5 Controller", "Assassin's Creed Valhalla"]
  
  return (
    <div>
       <h4 className="font-bold my-3 text-left"> Suggested Products</h4>
    <div className='flex flex-wrap gap-2'>
    {recommend.map((item,index)=>{
      return  <SuggestionBubble key={index} handleClick={handleClick} value={item}/>
    })}
    </div>
    </div>
  )
}
