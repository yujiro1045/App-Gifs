import { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';


export const AddCategory = ( { onNewCategoria } ) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ( { target } ) => {
    setInputValue(target.value);
  }

  const onSubmit = ( event ) => {
      event.preventDefault();
       if( inputValue.trim().length <= 1) return;

      //setCategorias( categorias => [ inputValue, ...categorias ])
      onNewCategoria( inputValue.trim() )
      setInputValue( '' );
  }


  return (
    <form onSubmit={ onSubmit }>
      <TextField
          fullWidth
          variant='outlined'
          label="Buscar gifs"
          value={  inputValue }
          onChange={ onInputChange }
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            )
          }}          
/>
     </form>
  )
}
