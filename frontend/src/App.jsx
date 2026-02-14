import React, { useState } from 'react'
import InputField from './components/login/InputField';
import './App.css';

const App = () => {
  const type="text";
  const name="username";
  const errorMessage="invalid password"
  return (
    <div>
      <InputField type={type} name={name} errorMessage={errorMessage}/>
    </div>
  )
}

export default App
