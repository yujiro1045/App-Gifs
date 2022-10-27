import { useState } from 'react'


export const AddCategory = ( { onNewCategoria } ) => {

  const [ inputValue, setinputValue ] = useState('');

  const onInputChange = ( { target } ) => {
    setinputValue(target.value);
  }

  const onSubmit = ( event ) => {
      event.preventDefault();
       if( inputValue.trim().length <= 1) return;

      //setCategorias( categorias => [ inputValue, ...categorias ])
      onNewCategoria( inputValue.trim() )
      setinputValue( '' );
  }


  return (
    <form onSubmit={ onSubmit }>
      <input 
          type="text"
          placeholder="buscar gifs"
          value={  inputValue }
          onChange={ onInputChange }
      />
     </form>
  )
}
