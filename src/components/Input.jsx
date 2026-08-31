import React from 'react'

const Input = ({label, name, type="text", value, onChange, placeholder}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-md font-medium'>{label}</label>
      <input className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-black-500 focus-border-black-500' name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}></input>
    </div>
  )
}

export default Input;
