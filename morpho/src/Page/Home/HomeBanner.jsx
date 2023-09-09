import bannerimage1 from "../../image/Wallpanel.jpg";
import { css } from '@emotion/react';
const HomeBanner = () => {

  return (<div className="contents">
    <div className="banner1"
      css={css`
          height:500px;
          position:relative;
          `}>
    <img className="banner1_1" src={bannerimage1} alt="Banner" 
      css={css`
      height:400px;`}/>
    <h1 className="word">best quility</h1>
    </div>
  </div>)
};

export default HomeBanner;