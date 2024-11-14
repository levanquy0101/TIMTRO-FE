import React from 'react';
import item from '../../assets/images/item1.png';

const TheExistRoom = () => {
    return (
        <section className='mt-36'>
            <h1 className='text-center uppercase my-4 text-4xl'>Phòng hiện có</h1>
            <p className='text-center'>Các phòng đa dạng với sức chứa khác nhau.</p>
            <div className='flex scroll-hidden gap-4 justify-between my-16'>
                <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-1/5'>
                    <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                    <figcaption className='p-2'>
                        <strong className='block'>3.000.000vnd/tháng</strong>
                        <p className='my-2'>AnThuong09 Apartment</p>
                        <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                        <p className='my-2'>1 bed - bath</p>
                        <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                    </figcaption>
                </div>
                <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-1/5'>
                    <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                    <figcaption className='p-2'>
                        <strong className='block'>3.000.000vnd/tháng</strong>
                        <p className='my-2'>AnThuong09 Apartment</p>
                        <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                        <p className='my-2'>1 bed - bath</p>
                        <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                    </figcaption>
                </div>
                <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-1/5'>
                    <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                    <figcaption className='p-2'>
                        <strong className='block'>3.000.000vnd/tháng</strong>
                        <p className='my-2'>AnThuong09 Apartment</p>
                        <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                        <p className='my-2'>1 bed - bath</p>
                        <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                    </figcaption>
                </div>
                <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-1/5'>
                    <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                    <figcaption className='p-2'>
                        <strong className='block'>3.000.000vnd/tháng</strong>
                        <p className='my-2'>AnThuong09 Apartment</p>
                        <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                        <p className='my-2'>1 bed - bath</p>
                        <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                    </figcaption>
                </div>
                <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-1/5'>
                    <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                    <figcaption className='p-2'>
                        <strong className='block'>3.000.000vnd/tháng</strong>
                        <p className='my-2'>AnThuong09 Apartment</p>
                        <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                        <p className='my-2'>1 bed - bath</p>
                        <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                    </figcaption>
                </div>
              
            </div>
        </section>
    );
};

export default TheExistRoom;