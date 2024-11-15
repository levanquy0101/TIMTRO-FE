import React from 'react';
import HeaderHome from '../../components/Header/HeaderHome';
import FooterHome from '../../components/Footer/FooterHome';
import item from '../../assets/images/item1.png';

function RoomPage(props) {
    return (
        <>
            <HeaderHome />
            <main>
                <div className='p-16'>
                    <div className='flex justify-between bg-[#e1e1e1] p-3 rounded-md my-4'>
                        <p className='text-lg text-zinc-600'>306 Phòng</p>
                        <div className='flex gap-2'>
                            <p className='text-lg text-zinc-600'>Sắp xếp:</p>
                            <select className='bg-transparent border-none text-primary outline-none text-lg'>
                                <option className='' value="">Giá (Thấp - Cao)</option>
                                <option className='' value="">Giá (Cao - Thấp)</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-12'>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
                            <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                            <figcaption className='p-2'>
                                <strong className='block'>3.000.000vnd/tháng</strong>
                                <p className='my-2'>AnThuong09 Apartment</p>
                                <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                                <p className='my-2'>1 bed - bath</p>
                                <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                            </figcaption>
                        </div>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
                            <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                            <figcaption className='p-2'>
                                <strong className='block'>3.000.000vnd/tháng</strong>
                                <p className='my-2'>AnThuong09 Apartment</p>
                                <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                                <p className='my-2'>1 bed - bath</p>
                                <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                            </figcaption>
                        </div>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
                            <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                            <figcaption className='p-2'>
                                <strong className='block'>3.000.000vnd/tháng</strong>
                                <p className='my-2'>AnThuong09 Apartment</p>
                                <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                                <p className='my-2'>1 bed - bath</p>
                                <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                            </figcaption>
                        </div>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
                            <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                            <figcaption className='p-2'>
                                <strong className='block'>3.000.000vnd/tháng</strong>
                                <p className='my-2'>AnThuong09 Apartment</p>
                                <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                                <p className='my-2'>1 bed - bath</p>
                                <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                            </figcaption>
                        </div>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
                            <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                            <figcaption className='p-2'>
                                <strong className='block'>3.000.000vnd/tháng</strong>
                                <p className='my-2'>AnThuong09 Apartment</p>
                                <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                                <p className='my-2'>1 bed - bath</p>
                                <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                            </figcaption>
                        </div>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
                            <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                            <figcaption className='p-2'>
                                <strong className='block'>3.000.000vnd/tháng</strong>
                                <p className='my-2'>AnThuong09 Apartment</p>
                                <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                                <p className='my-2'>1 bed - bath</p>
                                <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                            </figcaption>
                        </div>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
                            <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                            <figcaption className='p-2'>
                                <strong className='block'>3.000.000vnd/tháng</strong>
                                <p className='my-2'>AnThuong09 Apartment</p>
                                <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                                <p className='my-2'>1 bed - bath</p>
                                <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                            </figcaption>
                        </div>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
                            <img className='rounded-lg aspect-[13/10] w-full' src={item} alt="" />
                            <figcaption className='p-2'>
                                <strong className='block'>3.000.000vnd/tháng</strong>
                                <p className='my-2'>AnThuong09 Apartment</p>
                                <p className='my-2'>09 An thượng 1 - Ngũ Hành Sơn</p>
                                <p className='my-2'>1 bed - bath</p>
                                <button className='w-full cursor-pointer mt-2 p-1.5 rounded text-primary border-[2px] border-solid border-primary '>Đặt phòng</button>
                            </figcaption>
                        </div>
                        <div className='bg-[#e8e8e8] rounded-lg min-w-64 w-full'>
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
                    <div className='w-full flex gap-4 text-primary justify-center mt-8'>
                        <span className='text-2xl cursor-pointer hover:underline'>1</span>
                        <span className='text-2xl cursor-pointer hover:underline'>2</span>
                        <span className='text-2xl cursor-pointer hover:underline'>3</span>
                        <span className='text-2xl cursor-pointer hover:underline'>4</span>
                        <span className='text-2xl cursor-pointer hover:underline'>5</span>
                    </div>
                </div>
            </main>
            <FooterHome />
        </>
    );
}

export default RoomPage;