import React from 'react'
import './input.css';

export const InputText = ({placeholder, value, label, onChange, className}) => {
  return (
    <>
      <label>{label}</label>
      <input type='text' className={className} placeholder={placeholder} value={value} onChange={onChange}  style={{width: "100%"}}/>
    </>
  )
}

export const InputPassword = ({label, value, onChange, children, type, className}) => {
  return(
    <div className='input-container'>
      <label>{label}</label>
      <input type={type} className={className} value={value} onChange={onChange} style={{width: "85%"}}/>
      {children}
    </div>
  )
}

export const InputSelect = ({onChange, label, options, className}) => {
  return (
    <>
    <label><label>{label}</label></label>
    <select className={className} style={{width: "100%"}} onChange={onChange}>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
    </>
  )
}
