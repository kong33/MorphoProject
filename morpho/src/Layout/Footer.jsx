import React from 'react';
import { css } from '@emotion/react';
const Footer = () =>{
    return(<footer className="footer"
        css={css` 
            position:relative;
            top:100vh; 
            //relative이어야 부모 태그, 주위 태그 상관 없이 
            // static 기준 위치 설정이 가능. top에서 100vw만큼 떨어져 있으므로 vw가장 하단.`}>
            <h1>footer</h1>
        </footer>
    )
}

export default Footer;