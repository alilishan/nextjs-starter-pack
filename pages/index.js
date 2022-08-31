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
                <h1 className="display-6">NextJS Starter App</h1>
                <p className="lead">Package to quickly set up Next.js project with Sass, Bootstrap and SVG.</p>

                <hr className="dashed"/>

                <div className="svg-icon">
                    <OunchLogo />
                </div>
            </div>
        </div>
    );
}
 
export default Home;