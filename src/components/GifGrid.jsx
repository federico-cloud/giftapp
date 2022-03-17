import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const [imagenes, setImagenes] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=vegetta&limit=20&api_key=FQNhGq9VGKl9uLcBgROf6bKArM2jKtTR';
        const resp = await fetch(url);

        const {data} = await resp.json();

        const gifs = data.map( img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        setImagenes(gifs);
    } 
  
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
