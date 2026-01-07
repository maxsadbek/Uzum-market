import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [navModal, setNavModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const buyurtmaModal = () => {
    setNavModal(!navModal);
  };

  return (
    <header className="relative">
      <div className="bg-[#F0F2F5]">
        <div className="big-container m-auto py-1 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div
              onClick={toggleModal}
              className="flex items-center gap-1.5 cursor-pointer w-max"
            >
              <FiMapPin />
              <p className="font-medium text-[15px]">Oyim</p>
              <p className="mt-1">
                <IoIosArrowDown />
              </p>
            </div>
            <h4 className="cursor-pointer font-[500] text-[15px]">
              Topshirish punktlari
            </h4>
          </div>
          <div className="flex items-center gap-2.5">
            <p className="text-violet-500 border-r-2 pr-2 border-[#dddddd] font-medium text-[15px] cursor-pointer">
              Sotuvchi bo'lish
            </p>
            <p className="text-violet-500 font-medium text-[15px] cursor-pointer">
              Topshirish punktini ochish
            </p>
            <p className=" text-[15px] text-[#4d4f58] hover:text-[#1e1f22] cursor-pointer font-medium ml-2">
              Savol javob
            </p>
            <p
              onClick={buyurtmaModal}
              className=" text-[15px] text-[#4d4f58] hover:text-[#1e1f22] cursor-pointer font-medium ml-2"
            >
              Buyurtmalarim
            </p>
            <div></div>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={toggleModal}
          ></div>
          <div className="relative z-50 w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[22px] font-semibold">Shaharlarni tanlang</h3>
              <button
                onClick={toggleModal}
                className="transition-colors p-1 bg-[#DEE0E5] cursor-pointer rounded-full text-gray-600 hover:bg-gray-300"
              >
                <MdOutlineClose size={24} />
              </button>
            </div>
            <div className="relative flex items-center w-full ">
              <span className="absolute left-3 text-gray-600">
                <CiSearch size={20} />
              </span>
              <input
                type="text"
                placeholder="Shaharlarni topish"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-lg outline-none"
              />
            </div>
            <div className="overflow-y-auto px-1 mt-1.5 h-90">
              {[
                "Andijon (O‘zbekiston)",
                "Buxoro (O‘zbekiston)",
                "Doha (Qatar)",
                "Erivan (Armaniston)",
                "Farg‘ona (O‘zbekiston)",
                "Guliston (O‘zbekiston)",
                "Hirat (Afg‘oniston)",
                "Istanbul (Turkiya)",
                "Jidda (Saudiya Arabistoni)",
                "Kattaqo‘rg‘on (O‘zbekiston)",
                "London (Buyuk Britaniya)",
                "Madrid (Ispaniya)",
                "Namangan (O‘zbekiston)",
                "Olmaota (Qozog‘iston)",
                "Parij (Fransiya)",
                "Qarshi (O‘zbekiston)",
                "Rim (Italiya)",
                "Samarqand (O‘zbekiston)",
                "Toshkent (O‘zbekiston)",
                "Urganch (O‘zbekiston)",
                "Vena (Avstriya)",
                "Xiva (O‘zbekiston)",
                "Yokogama (Yaponiya)",
                "Zarafshon (O‘zbekiston)",
                "O‘sh (Qirg‘iziston)",
                "G‘ijduvon (O‘zbekiston)",
                "Shahrisabz (O‘zbekiston)",
                "Chust (O‘zbekiston)",
                "Nukus (O‘zbekiston)",
                "Tabriz (Eron)",
              ].map((city, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center border-b-2 pb-2.5 border-b-[#cccdd0] cursor-pointer hover:bg-[#edeff2af] px-3.5 py-4.5 ease-in duration-250 ease-in-out rounded-t-[4px] ${
                    index !== 0 ? "mt-2" : "top-1"
                  }`}
                >
                  <p>{city}</p>
                  <span>
                    <GoChevronRight size={20} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {navModal && (
        <div className="w-full h-full fixed -mt-8">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={buyurtmaModal}
          ></div>
          <div className="relative z-50 w-full max-w-[470px] bg-white p-6 px-10.5 rounded-xl shadow-lg mx-4 top-40 left-[32rem]">
            <div className="flex items-center">
              <div className="big-container m-auto flex ml-[8rem] gap-2 items-center">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="128" cy="128" r="128" fill="#7B2CFF" />
                  <path
                    d="M80 72 V136 C80 168 104 192 128 192
           C152 192 176 168 176 136 V72"
                    stroke="white"
                    stroke-width="20"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                  <line
                    x1="128"
                    y1="56"
                    x2="128"
                    y2="112"
                    stroke="white"
                    stroke-width="20"
                    stroke-linecap="round"
                  />
                </svg>
                <span className="text-violet-500 text-[22px] font-bold">
                  uzumID
                </span>
              </div>
              <p
                onClick={buyurtmaModal}
                className="cursor-pointer p-1 transition-colors p-1 bg-[#DEE0E5] cursor-pointer rounded-full text-gray-600 hover:bg-gray-300 "
              >
                <MdOutlineClose size={20} />
              </p>
            </div>
            <br />
            <h3 className="text-center text-[22px] font-semibold">
              Uzum Market’ga kirish
            </h3>
            <br />
            <div className="flex items-center">
              <div className="bg-[#DEE0E5] p-2.5 rounded-l-[10px] text-[20px]">
                +998
              </div>
              <input
                type="text"
                placeholder="00-000-00-00"
                className="bg-[#DEE0E5] p-2.5 w-full rounded-r-[10px] outline-hidden text-[20px]"
              />
            </div>
            <button className="text-center w-full mt-[10px] bg-[#7000FF] text-white border-[#7000FF] border-2 p-3 rounded-xl font-semibold cursor-pointer hover:bg-[#7c1ff6] duration-200 ease-in">
              Kodni olish
            </button>
            <p className="text-gray-500 text-[14px] font-semibold text-center mt-14">
              Davom etgan holda men
            </p>
            <p className="font-normal text-center">
              <a
                href="#"
                className="text-gray-500 underline decoration-1 text-[14px]"
              >
                Davom etgan holda men shaxsiy ma'lumotlarni qayta ishlash
                siyosatiga rozilik bildirasiz va Uzum ID ommaviy oferta bilan
                rozi bo‘laman
              </a>
            </p>
            <p className="text-center mt-4">
              <a href="#" className="underline decoration-1 text-gray-500">UzumId nima ?</a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default App;
