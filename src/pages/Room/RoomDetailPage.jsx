import React from 'react';
import HeaderHome from '../../components/Header/HeaderHome';
import FooterHome from '../../components/Footer/FooterHome';
import Slider from 'react-slick';
import RoomDetail from '../../components/Section/RoomDetail';

function RoomDetailPage(props) {
    // Mảng các đường dẫn ảnh
    const imageUrls = [
        'https://picsum.photos/800/600?random=1',
        'https://picsum.photos/800/600?random=2',
        'https://picsum.photos/800/600?random=3',
        'https://picsum.photos/800/600?random=4',
        'https://picsum.photos/800/600?random=5'
    ];

    const settings = {
        // dots: true,  // Hiển thị dots
        infinite: true,  // Vòng lặp vô tận
        speed: 500,  // Tốc độ chuyển slide
        slidesToShow: 3,  // Số ảnh hiển thị cùng lúc
        slidesToScroll: 1,  // Số ảnh cuộn mỗi lần
      
       
    };

    return (
        <>
            <HeaderHome />
            <main className='overflow-hidden'>
                <Slider {...settings}>
                    {imageUrls.map((url, index) => (
                        <div key={index} className='w-max'>
                            <img src={url} alt={`Slide ${index + 1}`} className="w-full h-auto px-1" />
                        </div>
                    ))}
                </Slider>
                <RoomDetail />
            </main>
            <FooterHome />
        </>
    );
}

export default RoomDetailPage;
