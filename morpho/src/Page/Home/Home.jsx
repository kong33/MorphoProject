import React from 'react';
import Layout from '../../Layout/Layout';
import HomeContents from './HomeContents/HomeContents';

import Product from '../Middlebanner/Product';

const Home = () => {
    return (<div>
            <Layout>
                <HomeContents/>
                <Product/>
            </Layout>
            </div>
    );
}

export default Home;