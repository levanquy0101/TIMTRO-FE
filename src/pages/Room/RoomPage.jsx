import React from 'react';
import HeaderHome from '../../components/Header/HeaderHome';
import FooterHome from '../../components/Footer/FooterHome';
import Room from '../../components/Section/Room';

function RoomPage(props) {
    return (
        <>
            <HeaderHome />
            <main>
                <Room />
            </main>
            <FooterHome />
        </>
    );
}

export default RoomPage;