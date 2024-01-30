import React from 'react';

const Footer = () =>{
    return(<footer className="footer"
        style ={{
            position: 'relative',
            top: '100vh'
            }}>
            {/* relative이어야 부모 태그, 주위 태그 상관 없이 
            static 기준 위치 설정이 가능. */}
            <h1>footer</h1>
        </footer>
    )
}

export default Footer;