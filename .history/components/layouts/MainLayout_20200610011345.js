import React from 'react';
import Header from '../includes/Header'
import Head from 'next/head';

const MainLayout = (props) => (
    <>
        <Head>
            
        </Head>
        <Header/>
        {props.children}
    </>
)

export default MainLayout;