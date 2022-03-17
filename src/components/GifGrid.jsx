import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data: images, loading} = useFetchGifs(categoria);
  
    return (
        <>
        <h3>{categoria}</h3>

        {loading && <h2>Loading</h2>}

            <div className="container">         
                {
                    images.map( img => (
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
