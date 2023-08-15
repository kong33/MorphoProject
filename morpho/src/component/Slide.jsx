import React from 'react';
import '../css/Slide.css'

const Slide =(props) => {
    return(<div className={props.slideName}>
        <section className="slide">
            <img className={props.innerImage} src={props.img} alt="img"/>
            <p className="word">{props.word}</p>
        </section>
    </div>)
}
export default Slide;