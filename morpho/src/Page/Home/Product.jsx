import React from 'react';
import Slide from './Slide';
import Wallpanel from '../../image/Wallpanel.jpg';
import { css } from '@emotion/react';

const Product = () =>{
    return(<div className="Product">

        <div className="firstBanner">
        <Slide slideName="Wallpanel" img="Wallimage" word="WALL PANELS" innerImage="wallpanel"
            css={css`
                    position: relative;
                    top:100vh;
                    `}/>
        <Slide slideName="Aluminum box" img="Allumimage" word="Aluminum box" innerImage="aluminumbox"/>
        </div>

        <div className="secondBanner">
        <Slide slideName= "Manu&Anod" img="Manuimage" word="Manufacturing & Anodizing" innerImage="manu"/>
        <Slide slideName= "paint&mark" img="Paintimage" word="Paint & Marking" innerImage="paint"/>
        </div>

    </div>)
}

export default Product;