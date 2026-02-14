import React, { useState } from 'react';
const InputField = (props) => {
  const [borderColor,setBorderColor]= useState("red");
  return (
    <div className='input-wrapper'>
        <div className='input-label' for="input-field" style={{color:borderColor}} >{props.name}</div>
            <input className='input-field' style={{color:borderColor}} type={props.type}/>
            <div className='input-error-message'style={{color:borderColor}}>{props.errorMessage}</div>
    </div>
  )
}

export default InputField;
