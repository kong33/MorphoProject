import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { css } from '@emotion/react';

const Layout =(props)=> {
    return(<div>
    <Header 
        css={css`
                margin:10vw;`}/>
        <main>
         {props.children}
   
        </main>
    <Footer/>
        </div>
    );
}

export default Layout;

