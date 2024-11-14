import React from 'react';
import aboutUs from '../../assets/images/aboutus.png';

const AboutUs = () => {
    return (
        <section className='flex p-4'>
            <img className='p-12' src={aboutUs} alt="" />
            <div className='p-12'>
                <h3 className='uppercase text-zinc-400 font-normal text-base'>About Us</h3>
                <h4 className='text-4xl font-bold my-4'>Chúng tôi có gì?</h4>
                <p className='text-primary text-3xl my-4'>Bất cứ gì bạn cần thuê trọ.</p>
                <p>Đội ngũ vận hành nhiều năm đem lại một số lượng khách hàng rất lớn và hàng trăm căn hộ chúng tôi đang sở hữu.</p>
                <div className='flex p-4 my-4 shadow rounded-md'>
                    <div className='flex flex-col justify-center items-center flex-1 p-2'>
                        <p className='text-xl'>Team</p>
                        <strong className='text-3xl text-[#723bcf]'>100+</strong>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-1 p-2'>
                        <p className='text-xl'>Team</p>
                        <strong className='text-3xl text-[#723bcf]'>100+</strong>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-1 p-2'>
                        <p className='text-xl'>Team</p>
                        <strong className='text-3xl text-[#723bcf]'>100+</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;