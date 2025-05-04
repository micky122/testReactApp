import React from 'react'

const Button = ({children, className, onClick, style}) => {
  return (
    <button className={className} onClick={onClick} style={style} > 
      {children}
    </button>
  )
}

export default Button;