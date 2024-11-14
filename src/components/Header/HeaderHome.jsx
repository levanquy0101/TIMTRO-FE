import React from 'react';
import { Link } from 'react-router-dom';

const HeaderHome = () => {
    return (
        <header className=''>
            <nav className='flex w-full justify-between py-6 px-20'>
                <h1 className='text-3xl'>T<span className='text-primary'>W</span>S.COM</h1>
                <ul className='flex gap-8 items-center'>
                    <li><Link>Trang Chủ</Link></li>
                    <li><Link>Phòng</Link></li>
                    <li><Link>Tiện Ích</Link></li>
                    <li><Link>Mẹo</Link></li>
                    <li><Link>Về Chúng Tôi</Link></li>
                    <li className='rounded-md border border-primary border-solid px-2 py-1.5 text-primary'>
                        <button className='text-primary text-base bg-transparent border-none cursor-pointer'>Đăng ký</button>
                        <span className='text-primary mx-1'>|</span>
                        <button className='text-primary text-base bg-transparent border-none cursor-pointer'>Đăng nhập</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderHome;