import React from 'react';

function InputComponent({ inputs, onInputChange }) {

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    onInputChange({ ...inputs, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onInputChange({ ...inputs, [name]: checked });
  };

  return (
    <div className="input-section">
      <label>De: 
        <input type="date" name="startDate" value={inputs.startDate} onChange={handleDateChange} />
      </label>
      <label>À: 
        <input type="date" name="endDate" value={inputs.endDate} onChange={handleDateChange} />
      </label>

      <div className="checkboxes">
        <label>
          <input type="checkbox" name="agregat" checked={inputs.agregat} onChange={handleCheckboxChange} />
          Agregat
        </label>
        <label>
          <input type="checkbox" name="tresorerie" checked={inputs.tresorerie} onChange={handleCheckboxChange} />
          Trésorerie
        </label>
        <label>
          <input type="checkbox" name="immobilisations" checked={inputs.immobilisations} onChange={handleCheckboxChange} />
          Immobilisations
        </label>
        <label>
          <input type="checkbox" name="obligations" checked={inputs.obligations} onChange={handleCheckboxChange} />
          Obligations
        </label>
      </div>
    </div>
  );
}

export default InputComponent;
