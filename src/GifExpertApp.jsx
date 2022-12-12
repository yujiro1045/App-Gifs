import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

const [ categorias, setCategorias ] = useState([ '' ]);


const onAddCategoria = ( newCategoria ) => {

  if (  categorias.includes ( newCategoria) ) return;
     
  //categorias.push(newCategoria);
    setCategorias([ newCategoria ])
    //setCategorias( cat => [ ...cat, 'kimetsu' ] );
    
}

  return (
    <>
      {/* titulo */} 
      <h1>GifExpertApp</h1>

      {/* imput */}
      <AddCategory 
          //setCategorias={ setCategorias } 
          onNewCategoria={ (valor) => onAddCategoria(valor) }
             />

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
