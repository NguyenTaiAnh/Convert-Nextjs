import '../styles/globals.css';
// import '../styles/custom/center.scss'
import '../styles/custom/footer.scss'
import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-image-lightbox/style.css';
import '../styles/custom/header.scss'

function MyApp({ Component, pageProps }) {
    return ( <
        div className = "root-app" >
        <
        Head >
        <
        title > Convert Nextjs < /title>


        <
        /Head> <
        Component {...pageProps }
        /> <
        /div>

    )
}

export default MyApp