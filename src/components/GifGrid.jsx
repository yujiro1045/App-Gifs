
import { useEffect, useState } from 'react';

//import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { getGifs } from '../helpers/getGifs';

    


export const GifGrid = ({ categoria }) => {

    getGifs(categoria);
  
    const { images, isLoading } = useFetchGifs( categoria );

    
    return (
    <>
        <h3>{ categoria }</h3>
        
        {
            isLoading && ( <h2>cargando...</h2> )
            
        }
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                    key={ image.id }
                    { ...image }
                    />
                ))
            }
            
            
        </div>

        
    </>
  )
}
