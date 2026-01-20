import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("likedProducts");
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);
  const removeItem = (id, section) => {
    const updated = wishlist.filter(
      (item) => !(item.id === id && item.section === section),
    );
    setWishlist(updated);
    localStorage.setItem("likedProducts", JSON.stringify(updated));
  };

  return (
    <div className="container mx-auto lg:px-35 py-10 px-2">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">
        Sizning savatingiz
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Wishlist bo‘sh...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlist.map((item) => (
            <div
              key={`${item.section}_${item.id}`}
              className="border border-gray-300 rounded-xl p-4 flex gap-4 items-center shadow-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold line-clamp-2">{item.title}</h3>

                <p className="text-violet-700 text-lg font-bold mt-2">
                  {item.price} so'm
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id, item.section)}
                className="text-gray-400 hover:text-red-500 text-xl transition cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
