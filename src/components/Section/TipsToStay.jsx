import React from 'react';

const TipsToStay = () => {
    return (
        <section className='flex py-20'>
            <div className='w-1/2  dot-pattern'>
                <div className='p-14'>
                    <h3 className='text-5xl uppercase'>Mẹo vặt ở <span className='text-primary'>trọ</span> </h3>
                    <p className='my-8 leading-relaxed'>Mẹo vặt có thể giúp bạn có thể lựa chọn được phòng phù hợp và các mẹo khác giúp bạn thích nghi với nơi mới...</p>
                    <button className='bg-primary cursor-pointer text-white border-none px-8 py-2 rounded text-lg'>Xem ngay</button>
                </div>
            </div>
            <div className='w-1/2 flex flex-col pl-8'>
                <div className='flex gap-4 p-4 '>
                    <img className='house-frame w-1/2 aspect-square' src="https://baogiaothong.mediacdn.vn/upload/2-2022/images/2022-04-18/1-1650247268-869-width740height555.jpg" alt="" />
                    <div>
                        <h4 className='uppercase text-xl'>11 bước cần làm khi thuê trọ</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quod cum laboriosam perspiciatis quam aperiam architecto repellendus iste eum magni.</p>
                    </div>
                </div>
                <div className='flex gap-4 p-4 '>
                    <img className='house-frame w-1/2 aspect-square' src="https://baogiaothong.mediacdn.vn/upload/2-2022/images/2022-04-18/1-1650247268-869-width740height555.jpg" alt="" />
                    <div>
                        <h4 className='uppercase text-xl'>11 bước cần làm khi thuê trọ</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quod cum laboriosam perspiciatis quam aperiam architecto repellendus iste eum magni.</p>
                    </div>
                </div>
                <div className='flex gap-4 p-4 '>
                    <img className='house-frame w-1/2 aspect-square' src="https://baogiaothong.mediacdn.vn/upload/2-2022/images/2022-04-18/1-1650247268-869-width740height555.jpg" alt="" />
                    <div>
                        <h4 className='uppercase text-xl'>11 bước cần làm khi thuê trọ</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quod cum laboriosam perspiciatis quam aperiam architecto repellendus iste eum magni.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TipsToStay;