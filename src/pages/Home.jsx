import React from 'react'
import Bannersection from '../components/Bannersection'
import Featuressection from '../components/Featuressection'
import Mediasection from '../components/Mediasection'
import Productsection from '../components/Productsection'
import Productbenifits from '../components/Productbenifits'
import Contentendsection from '../components/Contentendsection'
import Footersection from '../components/Footersection'


function Home() {
    const scrollToNav = () => {
        const nav = document.getElementById('nav');
        if (nav) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <>
            <Bannersection />
            <Featuressection />
            <Mediasection />
            <Productsection />
            <Productbenifits />
            <Contentendsection />
            <Footersection scrollToNav={scrollToNav} />
        </>
    )
}

export default Home
