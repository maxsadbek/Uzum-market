// CardPage.jsx
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const CardPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cartProducts");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  return (
    <div className="container mx-auto lg:px-35 py-10 px-2">
      <h1 className="lg:text-3xl text-xl font-medium text-gray-400 mb-8">
        Siznng savatingiz savat
      </h1>

      {cart.length === 0 ? (
        <p>Savat bo'sh...</p>
      ) : (
        <div className="gap-6 flex items-center flex-wrap justify-between">
          {cart.map((item) => (
            <div
              key={`${item.section}_${item.id}`}
              className="border border-gray-300 p-4 rounded-xl flex gap-6 cursor-pointer lg:w-[600px] w-[100%] text-center"
            >
              <img
                src={item.img}
                alt=""
                className="w-32 h-32 object-cover rounded mb-1"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-violet-700 text-xl font-bold mt-2">
                  {item.price} so'm
                </p>
                <div className="flex items-center gap-3 mt-3 ml-15">
                  <div className="flex items-center gap-1">
                    <p className="p-1 border border-gray-300 rounded-sm">
                      <FiMinus />
                    </p>
                    <p>1</p>
                    <p className="p-1 border  border-gray-300 rounded-sm">
                      <GoPlus />
                    </p>
                  </div>
                  <p className="mt-1 text-xl text-violet-600 hover:text-violet-800">
                    <AiOutlineDelete />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardPage;
