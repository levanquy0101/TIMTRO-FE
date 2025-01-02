import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from 'react-query';
import { getAllByLandlord, getAllByUser } from '../../services/api/RoomService';
import ModalAddRoom from '../Modal/ModalAddRoom';
import RoomCard from '../../ui/RoomCard';
import moment from 'moment';
import { getAll as getAllBill } from '../../services/api/BillService';
import { useLocation, useNavigate } from 'react-router-dom';
import { TaskCard } from '../../ui/TaskCard';
import { getAll as getAllServiceRequest } from '../../services/api/ServiceRequestService';
import ModalConfirm from '../Modal/ModalConfirm';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { BillService, ServiceRequestService } from '../../services/api';


export function AccountMe() {
  const { authData, logout } = useAuth();
  const [isEditingName, setIsEditingName] = useState(false),
    [isEditingEmail, setIsEditingEmail] = useState(false),
    [isEditingPhone, setIsEditingPhone] = useState(false),
    [isEditingDate, setIsEditingDate] = useState(false);

  const [name, setName] = useState(authData?.user?.name),
    [email, setEmail] = useState(authData?.user?.email),
    [phone, setPhone] = useState(authData?.user?.phone),
    [dateOfBirth, setDateOfBirth] = useState(authData?.user?.date_of_birth);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  }
  return (
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
      <button onClick={handleLogout} className='p-2 bg-primary rounded border-none text-white cursor-pointer'>Đăng xuất</button>
    </>
  )
}

export function RoomMe() {
  const { data: roomsMe } = useQuery({
    queryKey: ['room-me'],
    queryFn: () => getAllByUser(),
  });

  if (!roomsMe) {
    return null;
  }

  return (
    <>
      <h2 className='mb-8 text-zinc-600'>Trọ của tôi</h2>
      {roomsMe.map((roomData, index) => {
        const room = roomData.room;
        const rentalBill = roomData.rentalBills[0]; // Giả sử chỉ lấy hóa đơn đầu tiên

        return (
          <div key={index} className="mb-8">
            <h3 className='uppercase'>{`Tên phòng: ${room.name}`}</h3>
            <div className='flex flex-col gap-2 my-4'>
              <div className='flex gap-4'>
                <b>Địa chỉ:</b>
                <p className='text-zinc-600'>{room.address}</p>
              </div>
              <div className='flex gap-4'>
                <b>Giá thuê:</b>
                <p className='text-zinc-600'>{room.price} VNĐ</p>
              </div>
              <div className='flex gap-4'>
                <b>Ngày bắt đầu hợp đồng:</b>
                <p className='text-zinc-600'>{rentalBill?.start_date}</p>
              </div>
              <div className='flex gap-4'>
                <b>Ngày kết thúc hợp đồng:</b>
                <p className='text-zinc-600'>{rentalBill?.end_date}</p>
              </div>
              <div className='flex flex-col gap-4 bg-zinc-200 w-1/2 p-2 rounded'>
                <strong>Chi phí tháng 12</strong>
                <strong>Tiền điện: {rentalBill?.electricity_usage} kWh</strong>
                <strong>Tiền nước: {rentalBill?.water_usage} m³</strong>
                <strong>Tiền phòng: {room.price} VNĐ</strong>
                <strong>Tổng: {calculateTotal(room, rentalBill)} VNĐ</strong>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export function RentalRooms() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: roomsLandlord } = useQuery({
    queryKey: ['roomsLandlord'],
    queryFn: () => getAllByLandlord(),
  });

  return (
    <div>
      <div className='flex justify-between'>
        <h1>Phòng cho thuê</h1>
        <button className="bg-primary border-none cursor-pointer hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded" onClick={() => setIsModalOpen(true)}>
          Thêm phòng
        </button>
      </div>
      <div className='grid grid-cols-3 gap-8 my-8'>
        {
          roomsLandlord?.map((room, index) => (
            <RoomCard
              key={index}
              name={room?.name}
              link={`/room/${room?.id}`}
              image={room?.images[0]?.image_url}
              address={room?.address}
              price={room?.price}
              tenant={room?.rental_management[0]?.tenant?.name}
            />
          ))
        }
      </div>
      <ModalAddRoom isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )

}



export function RentalManagement() {
  const navigate = useNavigate()
  const { data: roomsLandlord = [] } = useQuery({
    queryKey: ['roomsLandlord'],
    queryFn: () => getAllByLandlord(),
  });

  const formatCurrency = (value) => {
    return value
      ? new Intl.NumberFormat('vi-VN').format(value) + 'đ'
      : 'Chưa có giá';
  };

  const formatDateRange = (start, end) =>
    start && end ? `${moment(start).format('DD/MM/YYYY')} đến ${moment(end).format('DD/MM/YYYY')}` : 'Chưa có ngày';

  const filteredRooms = roomsLandlord.filter(room => room?.rental_management?.length > 0);

  const handleBill = (roomId) => {
    navigate(`/my-account?position=5&roomId=${roomId}`);
  };
  return (
    <div>
      <h1>Quản lý cho thuê</h1>
      <div className="flex flex-col gap-4 mt-4">
        {filteredRooms?.map((room, index) => (
          <div key={index}>
            <h3 className="font-normal">Phòng: {room.name || `Phòng ${index + 1}`}</h3>
            <div className="w-1/2 border-2 border-solid border-zinc-400 p-4 rounded">
              <div className="grid grid-cols-2 gap-4">
                <p>Giá: <span>{formatCurrency(room.price)}</span></p>
                <p>Người thuê hiện tại: <span>{room?.rental_management[0]?.tenant?.name || 'Chưa có người thuê'}</span></p>
                <p>Địa chỉ: <span>{room.address || 'Chưa có địa chỉ'}</span></p>
                <p>Số điện thoại: <span>{room?.rental_management[0]?.tenant?.phone || 'Chưa có số điện thoại'}</span></p>
                <p>Hợp đồng từ: <span>{formatDateRange(room?.rental_management[0]?.start_date, room?.rental_management[0]?.end_date)}</span></p>
              </div>
              <button onClick={() => handleBill(room?.id)} className="bg-primary cursor-pointer text-white border-none p-2.5 font-bold rounded mt-4 ml-auto block">
                Hóa đơn thanh toán
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export function BillManagement() {
  const [isModal, setIsModal] = useState(false);
  const location = useLocation(); // Lấy thông tin URL hiện tại
  const searchParams = new URLSearchParams(location.search); // Phân tích query string
  const roomId = searchParams.get('roomId');
  const { data: billLandlords } = useQuery({
    queryKey: ["bill-landlords"],
    queryFn: () => getAllBill(roomId),
  });
  const { data: roomsLandlord = [] } = useQuery({
    queryKey: ['roomsLandlord'],
    queryFn: () => getAllByLandlord(),
  });
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await BillService.create(data);
      reset()
      toast.success("Thêm hóa đơn thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "text-green-600";
      case "unpaid":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "paid":
        return "Đã thanh toán";
      case "unpaid":
        return "Chưa thanh toán";
      default:
        return "Chưa có hóa đơn";
    }
  };
  // if (!billLandlords) return null;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className='flex justify-between items-center'>
          <h3 className="text-lg font-semibold text-zinc-600">{`Hóa đơn thanh toán phòng: ${billLandlords?.room?.name}`}</h3>
          <button onClick={() => setIsModal(true)} className="bg-primary cursor-pointer font-bold text-white rounded-lg px-4 py-2.5 mt-4 border-none">Thêm hóa đơn</button>

        </div>
        <div className="mt-4 space-y-3">
          {
            billLandlords?.bills?.map((rentalBill, billIdx) => (
              <div
                key={billIdx}
                className="p-4 bg-gray-100 rounded-lg mt-3"
              >
                <p className="text-gray-800">
                  <b>Trạng thái:</b>{" "}
                  <span
                    className={`font-semibold ${getStatusColor(
                      rentalBill?.status
                    )}`}
                  >
                    {getStatusLabel(rentalBill?.status)}
                  </span>
                </p>
                <div className="mt-3 space-y-2 text-gray-700">
                  <p>
                    Hóa đơn từ: {rentalBill?.start_date} đến{" "}
                    {rentalBill?.end_date}
                  </p>
                  <p>Tiền điện: {rentalBill?.electricity_usage} kWh</p>
                  <p>Tiền nước: {rentalBill?.water_usage} m³</p>
                  <p>Tiền phòng: {billLandlords?.room?.price} VNĐ</p>
                  <p className="font-medium">
                    Tổng: {calculateTotal(billLandlords?.room, rentalBill)} VNĐ
                  </p>
                </div>
              </div>
            ))}
        </div>
        <ModalConfirm isOpen={isModal} onClose={() => setIsModal(false)} title={"Hóa đơn"} children={<>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 gap-4">
            <label >
              <b className="text-sm">Chọn phòng đã thuê</b>
              <select
                {...register("rental_id")}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              >
                <option value="">-- Chọn phòng đã thuê --</option>
                {roomsLandlord?.map((room, index) => (
                  <option key={index} value={room?.id}>
                    {room?.name}
                  </option>
                ))}
              </select>
            </label>
            <label >
              <b className="text-sm">Ngày bắt đầu</b>
              <input
                type="date"
                placeholder="Ngày bắt đầu"
                {...register("start_date")}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
            </label>
            <label >
              <b className="text-sm">Ngày kết thúc</b>
              <input
                type="date"
                placeholder="Ngày kết thúc"
                {...register("end_date")}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
            </label>
            <label >
              <b className="text-sm">Số điện sử dụng</b>
              <input
                type="number"
                placeholder="Số điện sử dụng"
                {...register("electricity_usage")}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
            </label>
            <label >
              <b className="text-sm">Số nước sử dụng</b>
              <input
                type="number"
                placeholder="Số nước sử dụng"
                {...register("water_usage")}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
            </label>
            <button type="submit" className="p-2.5 bg-primary border-none text-white rounded cursor-pointer font-bold">Thêm hóa đơn</button>
          </form>
        </>} />
      </div>
    </div>
  )
}

export function TaskList() {
  const { data: tasks, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => getAllServiceRequest,
  })
  const handleConfirm = async (id) => {
    try {
      const res = await ServiceRequestService.updateConfirm(id);
      console.log(res);
      refetch();

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks?.map((task, index) => (
        <TaskCard
          key={index}
          taskId={task?.id}
          room={task?.room}
          service={task?.service}
          address={task?.address}
          movingFrom={task?.moving_from}
          movingTo={task?.moving_to}
          requestDate={task?.request_date}
          user={task?.user}
          status={task?.status}
          children={<>
            <button onClick={() => handleConfirm(task?.id)} className='border-none p-2 rounded bg-zinc-100 text-black'>Tiến hành làm</button>
          </>}
        />
      ))}
    </div>
  )
}

// Hàm tính tổng chi phí
function calculateTotal(room, rentalBill) {
  const electricityCost = rentalBill?.electricity_usage * room.electricity_rate;
  const waterCost = rentalBill?.water_usage * room.water_rate;
  const rent = parseFloat(room.price);
  return electricityCost + waterCost + rent;
}