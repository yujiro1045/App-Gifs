import { Button, Typography } from "@mui/material";
import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

const [ categorias, setCategorias ] = useState([]);


const onAddCategoria = ( newCategoria ) => {

  if (  categorias.includes ( newCategoria) ) return;
    
    setCategorias([ newCategoria ])  
}

const onClear = () => {
  setCategorias([])
}
console.log(categorias)


  return (
    <>
      {/* titulo */} 
      <h1>GifExpertAp</h1>

      {/* imput */}
      <AddCategory 
          //setCategorias={ setCategorias } 
          onNewCategoria={ (valor) => onAddCategoria(valor) }
             />

      <Button onClick={onClear} variant="contained" sx={{ my: 1 }}>Limpiar</Button>


      

      {/* listado de Gif */}
      
        { categorias.map( (categoria) => (
              <GifGrid key={ categoria } 
              categoria={ categoria } 
              />
              
              ) )
         }
        
      

      {/* Gif Item */}
    </>
  )
}
