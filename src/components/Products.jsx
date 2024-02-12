import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        const items = response.data;
        setProductData(items);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      image: product.image,
      name: product.title,
      price: product.price,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 mx-4 mt-10 md:grid-cols-4 md:mx-16 md:mt-16">
      {loading ? (
        <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 bg-white opacity-75">
          <div className="w-12 h-12 border-t-4 border-gray-400 rounded-full animate-spin"></div>
        </div>
      ) : (
        productData.map((product) => (
          <div key={product.id} className="flex flex-col w-40 m-5 h-full">
            <img
              src={product.image}
              alt={product.title}
              className="h-32 md:h-48 object-contain"
            />
            <h2 className="font-bold text-sm md:text-lg cursor-pointer truncate">
              {product.title}
            </h2>
            <p className="text-xs md:text-sm truncate">{product.description}</p>
            <h3 className="font-bold mt-2">
              {"$"}
              {product.price.toFixed(2)}
            </h3>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 px-4 py-2 text-sm font-bold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
            >
              Add To Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
