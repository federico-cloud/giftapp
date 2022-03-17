import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const [imagenes, setImagenes] = useState([]);

    useEffect( () => {
        getGifs(categoria)
            .then(setImagenes);
    }, [])
  
    return (
        <>
        <h3>{categoria}</h3>
            <div className="container">         
                {
                    imagenes.map( img => (
                        <GifGridItem
                            key = { img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
