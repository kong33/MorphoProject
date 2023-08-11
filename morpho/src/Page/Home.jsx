import React from 'react';
import Layout from '../Layout/Layout';
import HomeContents from '../Layout/HomeContents';
import InfoSlide from '../component/InfoSlide';
const Home = () => {
    return (<div>
            <Layout>
                <HomeContents />
                <InfoSlide mainWord="FRONT_PANELS" 
                word="FRONT PANELS" InfoWord="frontpanelInfo" 
                words="Our program provides endless flexibility when designing your front panel. Information about the design options available is provided on this page." 
                imgName="frontpanelImg" img=""/>
            </Layout>
            </div>
    );
}

export default Home;