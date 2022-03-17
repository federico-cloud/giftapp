import React, { useState } from 'react';

export const AddCategory = ({setCategorias}) => {
  
    const [inputValue, setInputValue] = useState('Escriba aqui su categoria');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategorias( cats => [inputValue,...cats]);
            setInputValue('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
