import React from 'react';

const Slide =(props) => {
    return(<div className={props.slideName}>
        <section className="slide">
            <img src={props.img} alt="img"/>
            <p className="word">{props.word}</p>
        </section>
    </div>)
}
export default Slide;