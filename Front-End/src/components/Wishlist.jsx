import React from "react";
import { asset } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate("/products");
  };
  return (
    <div>
      <div className="parent div">
        {/* header section */}
        <div className="text-center text-black mb-12 text-4xl font-bold mb-2">
          <div
            className="inset-0 bg-cover pt-[100px] pb-[50px]"
            style={{ backgroundImage: `url(${asset.bg})` }}
          >
            <h1 className="text-black">Your Wishlist</h1>
            <p className="text-black">Products/ Wishlist</p>
          </div>
        </div>

        <div className="wishlist-page">
          {/* Continue Shopping Button */}
          <div className="text-center mt-8">
            <button
              className="bg-red-600 mb-8 text-white px-6 py-3 rounded hover:bg-red-500"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
