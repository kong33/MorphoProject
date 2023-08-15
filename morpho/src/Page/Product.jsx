import React from 'react';
import Slide from '../component/Slide';
import Wallpanel from '../image/Wallpanel.jpg';
const Product = () =>{
    return(<div className="Product">

        <div className="firstBanner">
        <Slide slideName="Wallpanel" img="Wallimage" word="WALL PANELS" innerImage="wallpanel"/>
        <Slide slideName="Enclosures" img="" word="ENCLOSURES" innerImage="Enclosures"/>
        </div>

        <div className="secondBanner">
        <Slide slideName= "Miledparts" img="" word="MILLED PARTS" innerImage="Miledparts"/>
        <Slide slideName= "Signs" img="" word="SIGNS" innerImage="Signs"/>
        </div>

    </div>)
}

export default Product;