import React, { useEffect, useState } from "react";
import CardData from "./../data/cardData";

const Wishlist = () => {
  const [likedProduct, setLikedProduct] = useState([]);

  useEffect(() => {
    const likeCard = localStorage.getItem("likedProducts");
    if (likeCard) {
      setLikedProduct(JSON.parse(likeCard));
    }
  }, []);

  if (likedProduct.length === 0) {
    return <p>Savat bo‘sh</p>;
  }

  return (
    <div>
      {
        CardData.filter((item) => likedProduct.includes(item.id)).map(
          (item) => {
            return (
              <div key={item.id}>
                <img src={item.img} alt={item.title || "mahsulot"} />
                <p>{item.name}</p>
              </div>
            );
          },
        )
      }
    </div>
  );
};

export default Wishlist;
