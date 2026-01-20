// Card.jsx
import { LuChevronRight } from "react-icons/lu";
import { FaOpencart } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { useState } from "react";
import cardData from "../data/cardData";

const Card = () => {
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem("likedProducts");
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cartProducts");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleLike = (item) => {
    const key = `${item.section}_${item.id}`;
    setLiked((prev) => {
      const newLiked = prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key];
      localStorage.setItem("likedProducts", JSON.stringify(newLiked));
      return newLiked;
    });
  };

  const toggleCart = (item) => {
    setCart((prev) => {
      const exists = prev.some(
        (p) => p.section === item.section && p.id === item.id,
      );
      const newCart = exists
        ? prev.filter((p) => !(p.section === item.section && p.id === item.id))
        : [...prev, item];
      localStorage.setItem("cartProducts", JSON.stringify(newCart));
      return newCart;
    });
  };

  const getItemsBySection = (section) =>
    cardData.filter((item) => item.section === section);

  const renderProductCard = (item) => {
    const key = `${item.section}_${item.id}`;
    const isLiked = liked.includes(key);
    const isInCart = cart.some(
      (c) => c.section === item.section && c.id === item.id,
    );

    return (
      <div
        key={key}
        className="bg-white rounded-2xl shadow hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden"
      >
        <div className="h-48 lg:h-64 overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <button
          onClick={() => toggleLike(item)}
          className="absolute top-3 right-3 p-1 bg-white/80 rounded-full z-10 hover:bg-white transition cursor-pointer"
        >
          {isLiked ? (
            <IoIosHeart className="text-red-500 text-xl" />
          ) : (
            <IoIosHeart className="text-violet-500 text-xl" />
          )}
        </button>

        <div className="p-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-violet-700">
              {item.price} so'm
            </span>
            <span className="text-violet-500">{item.plastikCard}</span>
          </div>

          <p className="text-sm text-gray-500 line-through">
            {item.oldPrice} so'm
          </p>

          <p className="text-sm mt-2 line-clamp-2 min-h-[48px]">{item.title.slice(0,44)} ...</p>

          <div className="flex items-center gap-1 mt-2 text-sm">
            {item.star} <span>{item.rating}</span>
            <span className="text-gray-500">({item.comments})</span>
          </div>

          <button
            onClick={() => toggleCart(item)}
            className={`mt-4 w-full py-2 rounded-xl text-white font-medium transition ${
              isInCart
                ? "bg-violet-500 hover:bg-violet-600"
                : "bg-violet-700 hover:bg-violet-800"
            }`}
          >
            {isInCart ? (
              <span className="flex items-center justify-center gap-2">
                Savatda <IoCheckmarkDone />
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2 text-[12px] lg:text-[16px]">
                <FaOpencart /> Savatga qo‘shish
              </span>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8 xl:max-w-7xl">
      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl lg:text-3xl font-bold mb-6">
          Mashhur <LuChevronRight className="mt-1" />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {getItemsBySection("popular").map(renderProductCard)}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl lg:text-3xl font-bold mb-6">
          Arzon narxlar kafolati <LuChevronRight className="mt-1" />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {getItemsBySection("cheap").map(renderProductCard)}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl lg:text-3xl font-bold mb-6">
          Smartfonlar <LuChevronRight className="mt-1" />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {getItemsBySection("phones").map(renderProductCard)}
        </div>
      </div>
    </div>
  );
};

export default Card;
