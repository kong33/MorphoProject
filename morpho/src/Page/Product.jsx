import React from 'react';
import Slide from '../component/Slide';
import Wallpanel from '../image/Wallpanel.jpg';
import '../css/Product.css';
const Product = () =>{
    return(<div className="Product">

        <div className="firstBanner">
        <Slide slideName="Wallpanel" img="Wallimage" word="WALL PANELS" innerImage="wallpanel"/>
        <Slide slideName="Aluminum box" img="Allumimage" word="Aluminum box" innerImage="aluminumbox"/>
        </div>

        <div className="secondBanner">
        <Slide slideName= "Manu&Anod" img="Manuimage" word="Manufacturing & Anodizing" innerImage="manu"/>
        <Slide slideName= "paint&mark" img="Paintimage" word="Paint & Marking" innerImage="paint"/>
        </div>

    </div>)
}

export default Product;