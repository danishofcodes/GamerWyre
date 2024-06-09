import React from 'react'

export default function Input({handleChange, value, title, name}) {
  return (
      <div className="flex items-center gap-2">
       <input type="radio" name={name}  onChange={handleChange} value={value} />
        <label htmlFor="cat1" className="font-medium text-gray-900 dark:text-gray-300" >{title}</label>
        </div>

  )
}
