import React from 'react';

function OutputComponent({ inputs }) {
  const { agregat, tresorerie, immobilisations, obligations, startDate, endDate } = inputs;

 
  const fluxImpossibles = agregat 
    ? `[${startDate} - ${endDate}] Lorem ipsum for Agregat`
    : `No impossible flux for Agregat`;
  
  const fluxJournaliers = tresorerie 
    ? `[${startDate} - ${endDate}] Lorem ipsum for Trésorerie active`
    : `No daily flux for Trésorerie`;

  return (
    <div className="output-section">
      <h3>!! FLUX IMPOSSIBLES !!</h3>
      <div className="output">
        {fluxImpossibles}
      </div>

      <h3>!! FLUX JOURNALIERS !!</h3>
      <div className="output">
        {fluxJournaliers}
      </div>
    </div>
  );
}

export default OutputComponent;
