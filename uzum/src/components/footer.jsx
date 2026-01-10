import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";
import Fire from "../Images/fire.png";
import Headphones from "../Images/headphone-symbol.png";
import { FaOpencart } from "react-icons/fa";
import Buger from "./../Images/burger.jpg"
import { CiUser } from "react-icons/ci";

const Footer = () => {
  const [menuBar, setMenuBar] = useState(false);

  const menuToggle = () => {
    setMenuBar(!menuBar);
    console.log(menuBar);
  };
  return (
    <footer className="">
      <div className="lg:hidden fixed justify-between flex bottom-0 bg-white h-16 w-full items-center pb-12 px-2 pt-8">
        <div className="items-center">
          <p className="ml-4">
            <svg
              width="26"
              height="26"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="128" cy="128" r="128" fill="#7B2CFF" />
              <path
                d="M80 72 V136 C80 168 104 192 128 192 C152 192 176 168 176 136 V72"
                stroke="white"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <line
                x1="128"
                y1="56"
                x2="128"
                y2="112"
                stroke="white"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>
          </p>
          <p className="text-[12px] text-violet-800">Bosh sahifa</p>
        </div>
        <div onClick={menuToggle} className="items-center">
          <p className="ml-2 text-[24px]">
            <CiSearch />
          </p>
          <p className="text-[12px] text-violet-800">Katalog</p>
        </div>
        <div className="items-center">
          <p className="ml-0.5 text-[24px]">
            <FaOpencart />
          </p>
          <p className="text-[12px] text-violet-800">Savat</p>
        </div>
        <div className="items-center">
          <p className="ml-4">
            <img src={Buger} alt="" className="w-7.5 rounded-2xl" />
          </p>
          <p className="text-[12px] text-violet-800">Bosh sahifa</p>
        </div>
        <div className="items-center">
          <p className="ml-4 mt-1 text-[24px]"><CiUser /></p>
          <p className="text-[12px] text-violet-800">Bosh sahifa</p>
        </div>
      </div>
      {menuBar && (
        <div className="fixed inset-0 bg-white z-[40] overflow-y-auto pb-20">
          <div className="flex items-center justify-between p-4 border-b lg:px-35">
            <div>
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izzlash"
                className="bg-gray-200 w-full p-1 py-1.5 outline-hidden rounded-[7px] px-4 pr-[100px]"
              />
            </div>
            <button
              onClick={menuToggle}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
            >
              <MdOutlineClose size={24} />
            </button>
          </div>
          <div className="lg:px-35 flex flex-col lg:flex-row mt-2">
            <div className="w-full lg:w-64 border-r-[1px] border-gray-100 p-2">
              <h3 className="flex items-center justify-between cursor-pointer hover:bg-violet-50 p-3 rounded-lg duration-150 text-[14px]">
                Hafta tovarlari{" "}
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </h3>
              <h3 className="flex items-center justify-between cursor-pointer hover:bg-violet-50 p-3 rounded-lg duration-150 text-[14px]">
                Qishgi kolleksiya{" "}
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </h3>
              <h3 className="flex items-center justify-between cursor-pointer hover:bg-violet-50 p-3 rounded-lg duration-150 text-[14px]">
                Sizning go'zalligingiz{" "}
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </h3>{" "}
              <h3 className="flex items-center justify-between cursor-pointer hover:bg-violet-50 p-3 rounded-lg duration-150 text-[14px] ">
                Xobbi va ijod{" "}
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </h3>{" "}
              <h3 className="flex items-center justify-between cursor-pointer hover:bg-violet-50 p-3 rounded-lg duration-150 text-[14px]">
                Smartfonlar{" "}
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </h3>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-violet-50 rounded-lg">
                <img src={Fire} alt="fire" className="w-6 h-6 object-contain" />
                <p className="text-[14px] font-medium flex-1">Elektronika</p>
                <GoChevronRight className="text-gray-400 text-[20px]" />
              </div>
            </div>
            <div className="hidden lg:block flex-1 p-6">
              <h3 className="text-xl font-bold mb-4">
                Turizm, baliq ovi va ovchilik
              </h3>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-violet-700 mb-2">Chodirlar</h4>
                  <p className="text-gray-600 hover:text-violet-500 cursor-pointer text-sm py-1">
                    Sayohat chodirlari
                  </p>
                  <p className="text-gray-600 hover:text-violet-500 cursor-pointer text-sm py-1">
                    Oila uchun chodirlar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
