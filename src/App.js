import React, { useState } from 'react';
import InputComponent from './component/InputComponent';
import OutputComponent from './component/OutputComponent';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    startDate: '2024-07-01',
    endDate: '2024-07-16',
    agregat: true,
    tresorerie: true,
    immobilisations: true,
    obligations: true,
  });


  const handleInputChange = (newInputs) => {
    setInputs(newInputs);
  };

  return (
    <div className="App">
      <h2>Patrimoine Interface</h2>
      
      
      <InputComponent inputs={inputs} onInputChange={handleInputChange} />

    
      <OutputComponent inputs={inputs} />
    </div>
  );
}

export default App;
