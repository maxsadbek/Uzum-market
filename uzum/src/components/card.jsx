import { LuChevronRight } from "react-icons/lu";
import CardData from "../data/cardData";
import { FaOpencart } from "react-icons/fa6";
import { PhoneData } from "../data/cardData";
import { CheapData } from "../data/cardData";
import { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";

const Card = () => {
  const [product, setProduct] = useState({});
  const [liked, setLiked] = useState({});

  const getKey = (section, id) => `${section}_${id}`;

  const productCard = (section, id) => {
    const key = getKey(section, id);
    setProduct((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const likeToggle = (section, id) => {
    const key = getKey(section, id);
    setLiked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="container m-auto px-2 py-6 lg:px-34">
      <h2 className="flex items-center gap-1 text-xl lg:text-3xl font-semibold mb-6 cursor-pointer">
        Mashhur
        <span className="mt-1">
          <LuChevronRight />
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4 w-full">
        {CardData.map((item) => {
          const key = getKey("popular", item.id);
          const isLiked = !!liked[key];
          const isProduct = !!product[key];

          return (
            <div
              key={item.id}
              className="w-full flex flex-col bg-white rounded-2xl transition-shadow duration-300 hover:shadow-xl border border-gray-100 relative group cursor-pointer"
            >
              <div className="w-full h-[180px] lg:h-[240px] overflow-hidden rounded-t-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div
                className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full cursor-pointer z-10"
                onClick={() => likeToggle("popular", item.id)}
              >
                {isLiked ? (
                  <IoIosHeart className="text-red-500 text-xl" />
                ) : (
                  <IoIosHeart className="text-violet-400 text-xl" />
                )}
              </div>

              <div className="p-2 lg:p-3 flex flex-col flex-grow">
                <div className="flex items-center mb-1">
                  <p className="text-[14px] lg:text-[17px] font-bold text-violet-600 leading-tight">
                    {item.price}
                  </p>
                  <span className="text-[10px] lg:text-[15px] lg:mt-1 lg:ml-1 text-violet-400">
                    {item.plastikCard}
                  </span>
                </div>

                <p className="text-[11px] lg:text-[12px] text-gray-400 line-through">
                  {item.oldPrice}
                </p>

                <p className="text-[12px] lg:text-[14px] font-normal leading-4 lg:leading-5 text-gray-800 line-clamp-2 my-2 min-h-[32px] lg:min-h-[40px]">
                  {item.title}
                </p>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-500 text-[11px]">
                    {item.star}
                  </span>
                  <span className="text-[11px] font-medium">{item.rating}</span>
                  <span className="text-[11px] text-gray-400">
                    ({item.comments})
                  </span>
                </div>

                <button
                  className="mt-auto w-full flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 py-1.5 lg:py-2 text-white text-sm rounded-lg transition-colors cursor-pointer"
                  onClick={() => productCard("popular", item.id)}
                >
                  {isProduct ? (
                    <span className="flex items-center gap-2">
                      Savatga qo'shildi <IoCheckmarkDone size={16} />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaOpencart size={16} />
                      Savatga
                    </span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="flex items-center gap-1 text-xl lg:text-3xl font-semibold mb-6 cursor-pointer mt-10">
        Smartfonlarga chegirmalar
        <span className="mt-2">
          <LuChevronRight />
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4 w-full">
        {PhoneData.map((item) => {
          const key = getKey("phones", item.id);
          const isLiked = !!liked[key];
          const isProduct = !!product[key];

          return (
            <div
              key={item.id}
              className="w-full flex flex-col bg-white rounded-2xl transition-shadow duration-300 hover:shadow-xl border border-gray-100 relative group cursor-pointer"
            >
              <div className="w-full h-[180px] lg:h-[240px] overflow-hidden rounded-t-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div
                className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full cursor-pointer z-10"
                onClick={() => likeToggle("phones", item.id)}
              >
                {isLiked ? (
                  <IoIosHeart className="text-red-500 text-xl" />
                ) : (
                  <IoIosHeart className="text-violet-400 text-xl" />
                )}
              </div>

              <div className="p-2 lg:p-3 flex flex-col flex-grow">
                <div className="flex items-center mb-1">
                  <p className="text-[14px] lg:text-[17px] font-bold text-violet-600 leading-tight">
                    {item.price}
                  </p>
                  <span className="text-[10px] lg:text-[15px] lg:mt-1 lg:ml-1 text-violet-400">
                    {item.plastikCard}
                  </span>
                </div>

                <p className="text-[11px] lg:text-[12px] text-gray-400 line-through">
                  {item.oldPrice}
                </p>

                <p className="text-[12px] lg:text-[14px] font-normal leading-4 lg:leading-5 text-gray-800 line-clamp-2 my-2 min-h-[32px] lg:min-h-[40px]">
                  {item.title}
                </p>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-500 text-[11px]">
                    {item.star}
                  </span>
                  <span className="text-[11px] font-medium">{item.rating}</span>
                  <span className="text-[11px] text-gray-400">
                    ({item.comments})
                  </span>
                </div>

                <button
                  className="mt-auto w-full flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 py-1.5 lg:py-2 text-white text-sm rounded-lg transition-colors cursor-pointer"
                  onClick={() => productCard("phones", item.id)}
                >
                  {isProduct ? (
                    <span className="flex items-center gap-2">
                      Savatga qo'shildi <IoCheckmarkDone size={16} />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaOpencart size={16} />
                      Savatga
                    </span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="flex items-center gap-1 text-xl lg:text-3xl font-semibold mb-6 cursor-pointer mt-10">
        Arzon narxlar kafolati
        <span className="mt-2">
          <LuChevronRight />
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4 w-full">
        {CheapData.map((item) => {
          const key = getKey("cheap", item.id);
          const isLiked = !!liked[key];
          const isProduct = !!product[key];

          return (
            <div
              key={item.id}
              className="w-full flex flex-col bg-white rounded-2xl transition-shadow duration-300 hover:shadow-xl border border-gray-100 relative group cursor-pointer"
            >
              <div className="w-full h-[180px] lg:h-[240px] overflow-hidden rounded-t-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div
                className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full cursor-pointer z-10"
                onClick={() => likeToggle("cheap", item.id)}
              >
                {isLiked ? (
                  <IoIosHeart className="text-red-500 text-xl" />
                ) : (
                  <IoIosHeart className="text-violet-400 text-xl" />
                )}
              </div>

              <div className="p-2 lg:p-3 flex flex-col flex-grow">
                <div className="flex items-center mb-1">
                  <p className="text-[14px] lg:text-[17px] font-bold text-violet-600 leading-tight">
                    {item.price}
                  </p>
                  <span className="text-[10px] lg:text-[15px] lg:mt-1 lg:ml-1 text-violet-400">
                    {item.plastikCard}
                  </span>
                </div>

                <p className="text-[11px] lg:text-[12px] text-gray-400 line-through">
                  {item.oldPrice}
                </p>

                <p className="text-[12px] lg:text-[14px] font-normal leading-4 lg:leading-5 text-gray-800 line-clamp-2 my-2 min-h-[32px] lg:min-h-[40px]">
                  {item.title}
                </p>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-500 text-[11px]">
                    {item.star}
                  </span>
                  <span className="text-[11px] font-medium">{item.rating}</span>
                  <span className="text-[11px] text-gray-400">
                    ({item.comments})
                  </span>
                </div>

                <button
                  className="mt-auto w-full flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 py-1.5 lg:py-2 text-white text-sm rounded-lg transition-colors cursor-pointer"
                  onClick={() => productCard("cheap", item.id)}
                >
                  {isProduct ? (
                    <span className="flex items-center gap-2">
                      Savatga qo'shildi <IoCheckmarkDone size={16} />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaOpencart size={16} />
                      Savatga
                    </span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
