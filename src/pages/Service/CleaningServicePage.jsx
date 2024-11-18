

function CleaningServicePage(props) {
    return (
        <>
            <div className="relative">
                <img className="w-full aspect-[7/2]" src="https://picsum.photos/1600/400?random=1" alt="" />
                <h2
                    className="absolute top-1/2 left-0 uppercase text-center w-full text-6xl text-white text-shadow w-1/2 leading-snug"
                    style={{ transform: 'translateY(-50%)' }}
                >
                    Dịch vụ dọn dẹp
                </h2>
            </div>
            <div className=''>
                <h3 className='text-primary text-2xl text-center my-4'>Liên hệ đặt dịch vụ</h3>
                <div className='bg-zinc-200 p-2'>
                    <form action="" className='flex flex-col gap-4 my-4 max-w-md mx-auto'>
                        <input className='py-3 px-4 text-lg border rounded border-black outline-none' type="text" placeholder='Tên' />
                        <input className='py-3 px-4 text-lg border rounded border-black outline-none' type="text" placeholder='Email' />
                        <input className='py-3 px-4 text-lg border rounded border-black outline-none' type="text" placeholder='Số điện thoại' />
                        <input className='py-3 px-4 text-lg border rounded border-black outline-none' type="text" placeholder='Điện chỉ' />
                        <input className='py-3 px-4 text-lg border rounded border-black outline-none' type="text" placeholder='Ghi chú' />
                        <button className='py-2 px-10 mx-auto bg-primary text-white cursor-pointer border-none rounded text-lg w-max'>Đặt lịch</button>
                    </form>
                </div>
            </div>
            <div>
                <h3 className='text-primary text-2xl text-center my-4'>Quy trình làm việc</h3>
                <div className='grid grid-cols-2 gap-8 px-16 py-2 my-8'>
                    <div>
                        <h3 className='uppercase text-center'>Bước 1: Tư vấn và báo giá</h3>
                        <p className='uppercase my-2 text-center'>Khách hàng liên hệ và cung cấp thông tin về nhu cầu chuyển trọ. Chúng tôi sẽ tư vấn gói dịch vụ phù hợp và báo giá chi tiết.</p>
                    </div>
                    <div>
                        <h3 className='uppercase text-center'>Bước 2: Đóng gói đồ đạc</h3>
                        <p className='uppercase my-2 text-center'>Đội ngũ nhân viên sẽ đến tận nơi để đóng gói và bảo vệ đồ đạc bằng các vật liệu chuyên dụng.</p>
                    </div>
                    <div>
                        <h3 className='uppercase text-center'>Bước 3: Vận chuyển</h3>
                        <p className='uppercase my-2 text-center'>Đồ đạc được vận chuyển an toàn tới địa chỉ mới bằng hệ thống xe tải chuyên dụng và đội ngũ tài xế kinh nghiệm.</p>
                    </div>
                    <div>
                        <h3 className='uppercase text-center'>Bước 4: Lắp đặt và hoàn tất</h3>
                        <p className='uppercase my-2 text-center'>Chúng tôi hỗ trợ khách hàng lắp đặt lại đồ đạc tại nơi ở mới và đảm bảo mọi thứ hoàn chỉnh.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CleaningServicePage;