import { useState } from "react";
import { steps } from "../../data";
import ModalConfirm from "../../components/Modal/ModalConfirm";
import { getAll } from "../../services/api/ServiceService";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { getAllByUser } from "../../services/api/RoomService";
import { ServiceRequestService } from "../../services/api";
import { toast } from "react-toastify";

function RepairServicePage(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isRoom, setIsRoom] = useState(true);
  const { data: services } = useQuery({
    queryKey: ['service-list'],
    queryFn: () => getAll(),
  });
  const { data: roomsMe } = useQuery({
    queryKey: ['room-me'],
    queryFn: () => getAllByUser(),
  });
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await ServiceRequestService.create(data);
      reset()
      setModalOpen(false);
      toast.success("Đặt lịch thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = (event) => {
    setIsRoom(event.target.checked);
    reset()
  };

  const handleOpenModal = (serviceId) => {
    setValue("service_id", serviceId);
    setModalOpen(true)
  };
  const handleCloseModal = () => setModalOpen(false);
  const repairServices = services?.filter(service => service.service_type === "repair");


  return (
    <div>
      <main>
        <div className="relative">
          <img
            className="w-full aspect-[7/2] object-cover"
            src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div
            className=" absolute top-1/2 left-1/2 flex flex-col w-1/2 justify-center items-center gap-5"
            style={{ transform: "translate(-50%,-50%)" }}
          >
            <h2 className="text-7xl md:text-6xl uppercase  text-white text-shadow w-full leading-snug text-center ">
              DỊCH VỤ SỮA CHỮA <br />
              24/7
            </h2>

            <button className="w-max px-7 p-1 bg-[#4561ec] border-2 border-[#4561ec] text-white text-2xl rounded-lg cursor-pointer hover:bg-white hover:text-[#4561ec]">
              Xem Các Gói
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
            Các gói dịch vụ sửa chữa.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairServices?.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden pb-4"
              >
                <img
                  src={service.image}
                  alt={service.service_name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-lg text-gray-600 text-center">
                    {service.description}
                  </p>

                  <p className="text-2xl font-bold text-center py-2">
                    {service.price}
                  </p>
                  <button onClick={() => handleOpenModal(service?.id)} className="mt-4 w-max text-sm bg-blue-500 text-white py-2 rounded-md border-2 border-transparent  px-6 float-right cursor-pointer hover:bg-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-blue-500">
                    Đặt Lịch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16 px-32 ">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
            Quy trình làm việc.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg flex flex-col justify-center items-center"
              >
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-lg text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ModalConfirm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={"Đặt lịch sửa chữa"}
        children={
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 gap-4">
            <input
              type="hidden"
              {...register("service_id", { required: true })}
            />
            <label className="cursor-pointer space-x-2">
              <input
                type="checkbox"
                checked={isRoom}
                onChange={handleToggle}
              />
              <span>Trạng thái: {isRoom ? "Có phòng" : "Địa chỉ khác"}</span>
            </label>
            {
              isRoom && (
                <label >
                  <b className="text-sm">Chọn phòng</b>
                  <select
                    {...register("room_id")}
                    className="w-full p-2 border border-gray-300 rounded outline-none"
                  >
                    <option value="">-- Chọn phòng --</option>
                    {roomsMe?.map((room, index) => (
                      <option key={index} value={room?.room?.id}>
                        {room?.room?.name}
                      </option>
                    ))}
                  </select>
                </label>
              )
            }
            {
              !isRoom && (
                <label >
                  <b className="text-sm">Nhập địa chỉ khác</b>
                  <input
                    type="text"
                    placeholder="Nhập địa chỉ khác"
                    {...register("address_other")}
                    className="w-full p-2 border border-gray-300 rounded outline-none"
                  />
                </label>
              )
            }
            <label >
              <b className="text-sm">Nhập mô tả</b>
              <input
                type="text"
                placeholder="Nhập mô tả"
                {...register("description")}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
            </label>
            <label >
              <b className="text-sm">Ngày thực hiện</b>
              <input
                type="date"
                placeholder="Ngày thực hiện"
                {...register("service_date")}
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
            </label>
            <button type="submit" className="p-2.5 bg-primary border-none text-white rounded cursor-pointer font-bold">Xác nhận</button>
          </form>
        }
      />
    </div>
  );
}

export default RepairServicePage;
