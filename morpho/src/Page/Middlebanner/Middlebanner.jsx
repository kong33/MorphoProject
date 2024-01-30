import React from 'react';

const Middlebanner=(props) => {
    return(<div className={props.slideName} 
        style={{
        width: '25vw',
        height: '35vh',
        backgroundColor: 'white',
        boxShadow: '1vw 2vh 3vh rgba(0,0,0,0.2)',
        display:'flex',
        margin: '5vh',
        padding: '10vh',
        justifyContent:'center',
        borderRadius : '3vh'
    }}>
    <img className={props.innerImage} src={props.img} alt="img"
    style={{margin: '0', position: 'relative', top: '10vh', left: '14.3vw', borderRadius:'3vh'}}/>
    <p
    style={{color:'black',
            fontSize: '8vh',
            position: 'relative',
            left: props.wordLeftPosition,
            top:props.wordTopPosition}}>
        {props.word}
    </p>
        
    </div>)
}
export default Middlebanner; 

