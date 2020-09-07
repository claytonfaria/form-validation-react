import React from 'react';
import './App.css';
import FormValidation from './components/FormValidation';
import validate from './components/Logic/ValidationLogic';

function App() {
  return (
    <>
      <FormValidation validate={validate} />
    </>
  );
}

export default App;
