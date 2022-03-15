import React, { useState } from 'react';

export const GiftApp = () => {

    const [categorias, setCategorias] = useState(['fede', 'roberto']);

    const handleAdd = () => {
        setCategorias([...categorias, 'Rolando']);
    }
  
  return (
    <>
   
        <h2>GiftApp</h2>
        <hr/>

        <button onClick={handleAdd}> Agregar </button>

        <ol>
            {
                categorias.map( categoria => {
                    return <li key={ categoria }>{categoria}</li>
                })
            }
        </ol>

    </>
  )
}
