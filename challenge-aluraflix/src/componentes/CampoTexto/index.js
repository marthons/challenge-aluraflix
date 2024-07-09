import React from 'react';

const CampoTexto = ({ label, placeholder, valor, aoAlterado }) => {
  return (
    <div className='campo-texto'>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={valor} 
        onChange={e => aoAlterado(e.target.value)}
      />
    </div>
  );
}

export default CampoTexto;
