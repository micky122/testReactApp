import React from 'react'
import './input.css';

export const InputText = ({placeholder, value, label, onChange}) => {
  return (
    <>
      <label>{label}</label>
      <input type='text' placeholder={placeholder} value={value} onChange={onChange}  style={{width: "100%"}}/>
    </>
  )
}

export const InputPassword = ({label, value, onChange, children}) => {
  return(
    <div className='input-container'>
      <label>{label}</label>
      <input type="password" className='input-field' value={value} onChange={onChange} style={{width: "85%"}}/>
      {children}
    </div>
  )
}

export const InputSelect = ({onChange, label, options}) => {
  return (
    <>
    <label><label>{label}</label></label>
    <select style={{width: "100%"}} onChange={onChange}>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
    </>
  )
}
