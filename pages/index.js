import Head from 'next/head';
import React from 'react';

import OunchLogo from '../assets/ounch-logo.svg';

const Home = () => {
    return (
        <div>
            <Head>
                <title>NextJS Stater Pack</title>
            </Head>
            <div className="container text-center py-6">
                <h1 className="display-6">NextJS Starter Package</h1>
                <p className="lead">by Lishan</p>
                
                <hr className="dashed"/>

                <div className="svg-icon">
                    <OunchLogo />
                </div>
            </div>
        </div>
    );
}
 
export default Home;