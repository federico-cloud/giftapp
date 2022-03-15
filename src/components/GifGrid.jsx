import React, { useEffect, useState } from 'react'

export const GifGrid = ({categoria}) => {

    const [imagenes, setImagenes] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=20&api_key=FQNhGq9VGKl9uLcBgROf6bKArM2jKtTR';
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
            <ol>
                {
                    imagenes.map( img => (
                        <li key={img.id}> {img.title}</li>
                    ))
                }
            </ol>
        </>
    )
}
