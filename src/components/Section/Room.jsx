import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import item from "../../assets/images/item1.png";
import { Link } from "react-router-dom";

const Room = () => {
  return (
    <section>
      <div className="p-16">
        <div className="flex justify-between bg-[#e1e1e1] p-3 rounded-md my-4">
          <p className="text-lg text-zinc-600">306 Phòng</p>
          <div className="flex gap-2">
            <p className="text-lg text-zinc-600">Sắp xếp:</p>
            <select className="bg-transparent border-none text-primary outline-none text-lg">
              <option className="" value="">
                Giá (Thấp - Cao)
              </option>
              <option className="" value="">
                Giá (Cao - Thấp)
              </option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-12">
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
          <div className="bg-[#e8e8e8] rounded-lg min-w-64 w-full">
            <Link to="/room/code">
              <img
                className="rounded-lg aspect-[13/10] w-full"
                src={item}
                alt=""
              />
            </Link>
            <figcaption className="p-2">
              <strong className="block">3.000.000vnd/tháng</strong>
              <p className="my-2">AnThuong09 Apartment</p>
              <p className="my-2">09 An thượng 1 - Ngũ Hành Sơn</p>
              <p className="my-2">1 bed - bath</p>
              <button className="w-full text-base  cursor-pointer mt-2 p-1 rounded text-primary border-[2px] border-solid border-primary hover:bg-primary hover:text-white  ">
                Đặt phòng
              </button>
            </figcaption>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-8">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav
                aria-label="Pagination"
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon aria-hidden="true" className="size-5" />
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" className="size-5" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
