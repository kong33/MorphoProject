import React from 'react';
import Middlebanner from './Middlebanner';
import Wallimage from '../../image/product_wallpanel.jpg';

const Product = () =>{
    return(<div className="Product" style={{margin:'10vh'}}>

        <div className="firstBanner" 
        style ={{ position: 'relative', top: '50vh', textAlign: 'center', display: 'flex', flexFlow: 'wrap', justifyContent: 'space-evenly'}}>
        <Middlebanner slideName="Wallpanel" img="" word="Wall Panels" innerImage="wallpanel" wordLeftPosition ="3.8vw" wordTopPosition ="25vh" style ={{ padding: '5vh', margin: '5vh'}}/>
        <Middlebanner slideName="Aluminum box" img="Allumimage" word="Aluminum box" innerImage="aluminumbox" wordLeftPosition ="-5vw" wordTopPosition = "-12vh" style ={{ padding: '5vh', margin: '5vh'}}/>
        </div>

        <div className="secondBanner"
        style ={{ position: 'relative', top: '50vh', textAlign: 'center', display: 'flex',  flexFlow: 'wrap', justifyContent: 'space-evenly'}}>
        <Middlebanner slideName= "Manu&Anod" img="Manuimage" word="Manufacturing & Anodizing" innerImage="manu" wordLeftPosition ="4vw" wordTopPosition = "-15vh"/>
        <Middlebanner slideName= "paint&mark" img="Paintimage" word="Paint & Marking" innerImage="paint" wordLeftPosition ="5vw"/>
        </div>

    </div>)
}
export default Product;