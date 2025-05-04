import React from 'react'
import './input.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
export const InputText = ({placeholder, value, label, onChange}) => {
  return (
    <>
      <label>{label}</label>
      <input type='text' placeholder={placeholder} value={value} onChange={onChange}  style={{width: "100%"}}/>
    </>
  )
}

export const InputPassword = ({label, value, onChange}) => {
  return(
    <div className='input-container'>
      <label>{label}</label>
      <input type="password" className='input-field' value={value} onChange={onChange} style={{width: "85%"}}/>
      <Button className="btn btn-primary mt-3 trash-button icon" onClick={()=>{
        alert("df")
      }}>
        <FontAwesomeIcon icon={faEye} />
      </Button>
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
