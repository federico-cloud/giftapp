import React, { useState } from 'react';
import { AddCategory } from './AddCategory';

export const GiftApp = () => {

    const [categorias, setCategorias] = useState(['fede', 'roberto']);

  return (
    <>
   
        <h2>GiftApp</h2>
        <AddCategory/>
        <hr/>

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
