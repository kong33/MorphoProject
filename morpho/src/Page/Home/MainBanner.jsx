import bannerimage1 from "../../image/Wallpanel.jpg";
import { css } from '@emotion/react';
const MainBanner = () => {

  return (<div className="contents">
    <div className="banner1"
      css={css`
          height:50vh;
          position:relative;
          `}>
    <img className="banner1_1" src={bannerimage1} alt="Banner" 
      css={css`
      height:70%;`}/>
    <h1 className="word">best quility</h1>
    </div>
  </div>)
};

export default MainBanner;