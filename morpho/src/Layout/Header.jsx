import React from 'react';
import { css } from '@emotion/react';



const Header = () =>{
    return (
        <header
            css={css``
            }>

            <h1 
                css={css`
                width:50%;
                padding:50px;
                position:absolute;
                left:50px;

           `}
                >MORPHO
            </h1>
        </header>
        
    )
}
export default Header;
