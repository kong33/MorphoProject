import React from 'react';
import { css } from '@emotion/react';
const Header = () =>{
    return (
        <header className =" header"
            css={css`
            margin:20vw;`
            }>

            <h1 className="logo"
                css={css`
                width:50%;`}
                >MORPHO
            </h1>
        </header>
        
    )
}
export default Header;
