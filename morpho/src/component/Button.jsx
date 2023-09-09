import React from 'react';
import { css } from '@emotion/react';
const Button =(props)=>{
    return (
        <p href={props}>{props.text}</p> // 폰트 맞추기 
    )
}