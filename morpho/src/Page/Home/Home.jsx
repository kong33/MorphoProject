import React from 'react';
import Layout from '../../Layout/Layout';
import HomeContents from './HomeContents';
import InfoSlide from './InfoSlide';
import Product from './Product';
import { css } from '@emotion/react';

const Home = () => {
    return (<div>
            <Layout>
                <HomeContents />
                <InfoSlide mainWord="FRONT_PANELS" 
                word="FRONT PANELS" InfoWord="frontpanelInfo" 
                words="Our program provides endless flexibility when designing your front panel. Information about the design options available is provided on this page." 
                imgName="frontpanelImg" img=""/>
                <Product
                    css={css`
                        position:absolute;
                        top:1000px;`}/>
            </Layout>
            </div>
    );
}

export default Home;