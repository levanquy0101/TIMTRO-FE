import React from 'react';
import HeaderHome from '../../components/Header/HeaderHome';
import FooterHome from '../../components/Footer/FooterHome';
import MyAccount from '../../components/Section/MyAccount';

function MyAccountPage(props) {
    return (
        <>
            <HeaderHome />
            <main>
                <MyAccount />
            </main>
            <FooterHome />
        </>
    );
}

export default MyAccountPage;