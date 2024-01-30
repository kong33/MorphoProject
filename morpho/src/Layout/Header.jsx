import React from 'react';
import {Link} from 'react-router-dom'


const Header = () =>{
    return (
        <div  style={{ margin: '5vw' }}>
            <Link to="/" style ={{textDecoration: 'none', color: 'black', fontSize: '3vw', fontWeight:'500'}}>MORPHO</Link>
        </div>
        
    )
}
export default Header;
