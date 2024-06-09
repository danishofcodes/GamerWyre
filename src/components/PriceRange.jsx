import React, { useState } from 'react'

export default function PriceRange({handleRangeSelect, priceRange}) {
  return (
    <div>        
        <h4 className="font-bold my-3 text-left"> Price Range </h4>
       <div className="mx-1">
        <input type="range" onChange={handleRangeSelect} min={1000} max={20000} value={priceRange}/>
        <h4>Rs. 500 - Rs. {priceRange}</h4>
        </div>
        </div>

  )
}
