import React from 'react';
import iconSearch from '../../assets/icons/search.svg'
import { IoLocation } from "react-icons/io5";
import { RiPriceTagFill } from "react-icons/ri";
import { BsCalendar2CheckFill } from "react-icons/bs";
import ImageSlider from '../ImageSlider';




const BannerHomeSilder = () => {
    const images = [
        'https://picsum.photos/600/400?random=1',
        'https://picsum.photos/600/400?random=2',
        'https://picsum.photos/600/400?random=3',
        'https://picsum.photos/600/400?random=4',
        'https://picsum.photos/600/400?random=5',
    ];
    return (
        <section className='p-8 bg-main-home rounded-xl'>
            <div className='flex gap-8'>
                <div className='w-3/5'>
                    <h1 className='text-6xl text-primary'>Phòng Đặc Biệt</h1>
                    <strong className='block text-white text-3xl leading-normal text-shadow'>Giá: 3.000k/tháng</strong>
                    <strong className='block text-white text-3xl leading-normal text-shadow'>Địa chỉ: 296 Võ Nguyên Giáp, <br /> Ngũ Hành Sơn, Đà Nẵng</strong>
                    <p className='py-8 text-white text-lg'>Phòng được thiết kế với không gian sông rộng rãi và tháng mát xung quanh với nhiều dịch vụ tiện ích khác nhau có tầm nhìn ra biển và ánh sáng tự nhiên vào mỗi buổi sáng.</p>
                    <button className='bg-primary cursor-pointer text-white border-none px-8 py-2 rounded text-lg'>Đặt ngay</button>
                </div>
                <div className='w-2/5'>
                    <ImageSlider images={images} />
                </div>
            </div>
            <div className='p-6 bg-white -mb-28 mt-16 shadow-black rounded-xl shadow-2xl'>
                <ul className='flex gap-2 font-medium uppercase py-2 overflow-x-auto'>
                    <li className='flex items-center gap-2 flex-1 whitespace-nowrap px-4 min-w-96'><IoLocation size={24} /> Khu vực/ Địa điểm</li>
                    <li className='flex items-center gap-2 flex-1 whitespace-nowrap px-4'><RiPriceTagFill size={24} /> Mức giá</li>
                    <li className='flex items-center gap-2 flex-1 whitespace-nowrap px-4'><BsCalendar2CheckFill size={20} /> Số người ở</li>
                </ul>
                <hr />
                <div className='flex py-4 gap-2 overflow-x-auto'>
                    <div className='bg-[#e1e1e1] flex flex-1 px-3 py-2 rounded gap-4 min-w-96'>
                        <label className='flex flex-col w-full' htmlFor="">
                            <span className='text-zinc-600'>Chọn tỉnh thành </span>
                            <input className='p-1 outline-none border-none bg-[#e1e1e1]' type="text" />
                        </label>
                        <label className='flex flex-col w-full' htmlFor="">
                            <span className='text-zinc-600'>Quận/ Huyện</span>
                            <input className='p-1 outline-none border-none bg-[#e1e1e1]' type="text" />
                        </label>
                    </div>
                    <i className='border-r-[0px] border-solid border-zinc-400 h-12 my-auto'></i>
                    <label className='flex flex-col flex-1 bg-[#e1e1e1] px-3 py-2 rounded' htmlFor="">
                        <span className='text-zinc-600'>Giá từ</span>
                        <input className='p-1 outline-none border-none bg-[#e1e1e1]' type="text" />
                    </label>
                    <i className='border-r-[0px] border-solid border-zinc-400 h-12 my-auto'></i>
                    <label className='flex flex-col flex-1 bg-[#e1e1e1] px-3 py-2 rounded' htmlFor="">
                        <span className='text-zinc-600'>Số lượng </span>
                        <input className='p-1 outline-none border-none bg-[#e1e1e1]' type="text" />
                    </label>
                    <button className='px-4 flex justify-center items-center text-white bg-primary rounded border-none'><img src={iconSearch} alt="" /></button>
                </div>
            </div>
        </section>
    );
};

export default BannerHomeSilder;