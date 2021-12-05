import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba3 b--green bg-lightest-blue'            
                type='search' 
                placeholder='Search robots'

                //Quando algo for escrito na barra de pesquisa, o evento onChange irá executar a função onSearchChange que está no app.js passando searchChange como parâmetro
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox