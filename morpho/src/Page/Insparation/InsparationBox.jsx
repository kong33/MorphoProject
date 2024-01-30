import React, { useState } from 'react'

const InspirationBox = ({imageLink, goodsExplain }) =>{
    const defalutStyle ={
        width: '16vw',
        height: '10vw',
        boxShadow: '10px 10px 0.5',
        position: 'relative',
    }
    const hoverStyle = {
        width: '16vw',
        height: '10vw',
        boxShadow: '10px 10px 0.5',
        position: 'absolue',
        top: '0',
        left: '0',
        backgroundColor :''
    }

    const nonHoverStyle ={
        display: 'none'
    }
    const [ isHovered, setIsHovered ] = useState(false);

    const handleMouseHover = () =>{
        setIsHovered(true);
    }

    const handleMouseOut = () =>{
        setIsHovered(false);
    }

    return (
        <div>
            <div style ={defalutStyle}
                onMouseOver ={handleMouseHover}
                onMouseOut={handleMouseOut}>
                <img src={imageLink} alt="제품 이미지"/>
            </div>
            <div style ={isHovered? hoverStyle : nonHoverStyle}>
                <p>{goodsExplain}</p>
            </div>
        </div>
    )
}

export default InspirationBox