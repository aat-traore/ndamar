import React from 'react'
 import './FormInput.css'

export const FormInputs = (props) => {
    const {id, label,  onChange, ...inputProps}= props
  return (
    <div className='FormInput'> 
    <label>{label}</label>
    <input {...inputProps} onChange={onChange}/>
         

    </div>
  )
}
