import React from 'react';
import { css } from '@emotion/react';

const Slide =(props) => {
    return(<div className={props.slideName}>
        <section className="slide"
            css={css`
                width:30vw;
                height: 40vh;
                background-color: white;
                box-shadow: 5vw 6vh 10vh rgba(0, 0,0,0.5);
                display:inline;
            `}
        >
            <img className={props.innerImage} src={props.img} alt="img"/>
            <p className="word"
                css={css` 
                        color: black;
                        font-size: 5vw;`}>
                    {props.word}
                    </p>
        </section>
    </div>)
}
export default Slide;