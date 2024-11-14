import React from 'react';
import HeaderHome from '../../components/Header/HeaderHome';
import TheExistRoom from '../../components/Section/TheExistRoom';
import Supplement from '../../components/Section/Supplement';
import TipsToStay from '../../components/Section/TipsToStay';
import BannerHomeSilder from '../../components/Section/BannerHomeSilder';
import FooterHome from '../../components/Footer/FooterHome';
import AboutUs from '../../components/Section/AboutUs';

function HomePage(props) {
    return (
        <>
            <HeaderHome />
            <main className='px-12'>
                <BannerHomeSilder />
                <TheExistRoom />
                <Supplement />
                <TipsToStay />
                <AboutUs />
            </main>
            <FooterHome />
        </>
    );
}

export default HomePage;