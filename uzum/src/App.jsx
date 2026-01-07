import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <header className="relative">
      <div className="big-container m-auto p-4">
        <div>
          <div
            onClick={toggleModal}
            className="flex items-center gap-0.5 cursor-pointer w-max"
          >
            <FiMapPin />
            <p className="font-medium">Oyim</p>
            <p className="mt-1">
              <IoIosArrowDown />
            </p>
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
    </header>
  );
};

export default App;
