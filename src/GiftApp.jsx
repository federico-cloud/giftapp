import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types';

export const GiftApp = () => {

    const [categorias, setCategorias] = useState([]);

  return (
    <>
   
        <h2>GiftApp</h2>
        <AddCategory setCategorias={setCategorias}/>
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

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
