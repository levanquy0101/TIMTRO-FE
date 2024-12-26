import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';

function MyAccount(props) {
    const [searchParams] = useSearchParams();
    const [positionNum, setPositionNum] = useState(1);
    const { authData } = useAuth();
    const [isEditingName, setIsEditingName] = useState(false),
        [isEditingEmail, setIsEditingEmail] = useState(false),
        [isEditingPhone, setIsEditingPhone] = useState(false),
        [isEditingDate, setIsEditingDate] = useState(false);

    const [name, setName] = useState(authData?.user?.name),
        [email, setEmail] = useState(authData?.user?.email),
        [phone, setPhone] = useState(authData?.user?.phone),
        [dateOfBirth, setDateOfBirth] = useState(authData?.user?.date_of_birth);

    const navigate = useNavigate()
    useEffect(() => {
        if (!authData?.user) {
            navigate('/');
        }
    }, []);
    useEffect(() => {
        // Lấy giá trị từ URL tham số, ví dụ: ?position=5
        const position = searchParams.get("position");
        if (position) {
            setPositionNum(Number(position)); // Chuyển thành số nếu cần
        }
    }, [searchParams, positionNum]);
    return (
        <section className='border-0 border-t border-solid border-zinc-400 flex ' style={{ minHeight: 'calc(100svh - 2.35rem)' }}>
            <aside className='bg-zinc-100 max-w-96 border-0 border-r border-solid border-zinc-400'>
                <div className='border-0 border-b border-solid border-zinc-400 text-center p-4'>
                    <FaUser size={32} color='blue' />
                    <h4 className='text-primary text-xl'>{authData?.user?.name}</h4>
                </div>
                <div className=''>
                    <h3
                        onClick={() => navigate("?position=1")}
                        className={`border-0 border-b border-solid font-normal hover:underline cursor-pointer py-3 px-6 border-zinc-400 ${positionNum === 1 ? "underline" : ""
                            }`}
                    >
                        Thông tin tài khoản
                    </h3>
                    <h3
                        onClick={() => navigate("?position=2")}
                        className={`border-0 border-b border-solid font-normal hover:underline cursor-pointer py-3 px-6 border-zinc-400 ${positionNum === 2 ? "underline" : ""
                            }`}
                    >
                        Trọ của tôi
                    </h3>
                </div>

            </aside>
            <div className='p-8 flex-1 min-h-[82vh]'>
                {
                    positionNum === 1 &&
                    <>
                        <h2 className='mb-8 text-zinc-600'>Thông tin</h2>
                        <form className='w-1/2'>
                            <b className="text-zinc-600">Tên tài khoản</b>
                            <div className="my-2 flex gap-2 items-center">
                                {isEditingName ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2.5 rounded w-full outline-none" /> : <p className='w-full py-2'>{name}</p>}
                                <span className="text-primary cursor-pointer" onClick={() => setIsEditingName(!isEditingName)}>{isEditingName ? 'Save' : 'Edit'}</span>
                            </div>

                            <b className="text-zinc-600">Email</b>
                            <div className="my-2 flex gap-2 items-center">
                                {isEditingEmail ? <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2.5 rounded w-full outline-none" /> : <p className='w-full py-2'>{email}</p>}
                                <span className="text-primary cursor-pointer" onClick={() => setIsEditingEmail(!isEditingEmail)}>{isEditingEmail ? 'Save' : 'Edit'}</span>
                            </div>

                            <b className="text-zinc-600">Số điện thoại</b>
                            <div className="my-2 flex gap-2 items-center">
                                {isEditingPhone ? <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2.5 rounded w-full outline-none" /> : <p className='w-full py-2'>{phone}</p>}
                                <span className="text-primary cursor-pointer" onClick={() => setIsEditingPhone(!isEditingPhone)}>{isEditingPhone ? 'Save' : 'Edit'}</span>
                            </div>

                            <b className="text-zinc-600">Ngày sinh</b>
                            <div className="my-2 flex gap-2 items-center">
                                {isEditingDate ? <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="border p-2.5 rounded w-full outline-none" /> : <p className='w-full py-2'>{dateOfBirth}</p>}
                                <span className="text-primary cursor-pointer" onClick={() => setIsEditingDate(!isEditingDate)}>{isEditingDate ? 'Save' : 'Edit'}</span>
                            </div>
                            <b className="text-zinc-600">Vai trò</b>
                            <div>
                                <p className='py-2'>{authData?.user?.role}</p>
                            </div>
                        </form>

                    </>
                }
                {
                    positionNum === 2 &&
                    <>
                        <h2 className='mb-8 text-zinc-600'>Trọ của tôi</h2>
                        <h2 className='uppercase'>Tên phòng: Phòng A101</h2>
                        <div className='flex flex-col gap-2 my-4'>
                            <div className='flex gap-4'>
                                <b>Địa chỉ:</b>
                                <p className='text-zinc-600'>09 An Thượng 09, Ngũ Hành Sơn, Đà Nẵng</p>
                            </div>
                            <div className='flex gap-4'>
                                <b>Giá thuê:</b>
                                <p className='text-zinc-600'>3.000.000 VNĐ</p>
                            </div>
                            <div className='flex gap-4'>
                                <b>Ngày bắt đầu hợp đồng:</b>
                                <p className='text-zinc-600'>16/09/2023</p>
                            </div>
                            <div className='flex gap-4'>
                                <b>Ngày kết thúc hợp đồng:</b>
                                <p className='text-zinc-600'>16/09/2024</p>
                            </div>
                            <div className='flex flex-col gap-4 bg-zinc-200 w-1/2 p-2 rounded'>
                                <strong > Chi phí tháng 12</strong>
                                <strong >Tiền điện</strong>
                                <strong >Tiền nước</strong>
                                <strong >Tiền phòng</strong>
                                <strong >Tổng: </strong>
                            </div>
                        </div>

                    </>
                }
            </div>
        </section>
    );
}

export default MyAccount;