import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState( '' );

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();  // prevenimos el evento para que no recargue

        if (inputValue.trim().length <= 1) return;  // validamos que la cantidad de caracteres por lo menos sea dos

        onNewCategory( inputValue.trim() );  // emitimos este valor para que llegue al componente padre
        setInputValue('');  // seteamos el campo cada que demos enter
    }

    return(
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar imagen"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    );
}