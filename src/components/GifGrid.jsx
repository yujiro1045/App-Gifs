
//import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { getGifs } from '../helpers/getGifs';
import { CircularProgress, Typography } from '@mui/material';

    


export const GifGrid = ({ categoria }) => {

    getGifs(categoria);
  
    const { images, isLoading } = useFetchGifs( categoria );

    console.log({images})

    if (isLoading) (
        <CircularProgress  />
    )
    
    return (
    <>
        {
            images?.length > 0 
                    ? <Typography  variant="h2" sx={{fontSize: 30, my: 2}}>Mostrando resultados para: "{ categoria }"</Typography>
                    : <Typography  variant="h2" sx={{fontSize: 30, my: 2}}>No se encontraron resultados para: "{ categoria }"</Typography>
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
