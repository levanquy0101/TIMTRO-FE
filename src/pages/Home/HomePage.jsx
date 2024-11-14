import React from 'react';
import HeaderHome from '../../components/Header/HeaderHome';
import TheExistRoom from '../../components/Section/TheExistRoom';
import Supplement from '../../components/Section/Supplement';
import TipsToStay from '../../components/Section/TipsToStay';
import BannerHomeSilder from '../../components/Section/BannerHomeSilder';

function HomePage(props) {
    return (
        <>
            <HeaderHome />
            <main className='px-12'>
                <BannerHomeSilder />
                <TheExistRoom />
                <Supplement />
                <TipsToStay />
            </main>
        </>
    );
}

export default HomePage;