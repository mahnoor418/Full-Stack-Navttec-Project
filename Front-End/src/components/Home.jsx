import React from 'react'
import { asset } from "../assets/assets";
// import Product from '../components/Products';
import { useNavigate } from 'react-router-dom';
import FeaturedAuthoer from './FeaturedAuthoer';
// import DailyDeals from './DailyDeals';
import Newproducts from '../Pages/newproducts'
import LatestNews from '../components/LatestNews';

function Home() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/products');
  };
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className='parent'>
      <div className="relative  overflow-hidden">
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${asset.Hmainimg})` }}
        >
          <div className="max-w-7xl mx-auto h-full flex items-center ">
            <div className=" bg-opacity-50 p-8 rounded-md   md:bg-opacity-70  shadow-lg">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Year end sale</span>
                <span className="block text-red-600">Get 70% Off For</span>
                <span className="block text-red-600"> All Design Books</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:text-xl">
                Donec sodales sagittis magna. SedMaeecnas nec odio et ante tincidunt tempus.

              </p>
              <div className="text-center mt-8">
                <button
                  className="bg-red-600 mb-8 text-white px-6 py-3 rounded hover:bg-red-500"
                  onClick={handleContinueShopping}
                >
                  shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <section className="container mx-auto my-15">
        <div className="grid grid-cols-1 sm:grid-cols-2   bg-[#F5F7F8]  md:grid-cols-4 gap-4">

          <div className="flex flex-col items-center text-center p-4  ">
            <img src={asset.carry} alt="Free Shipping" className="mb-4" />
            <h3 className="font-bold uppercase">Free Shipping</h3>
            <p className="text-gray-600">Order over $100</p>
          </div>

          <div className="flex flex-col items-center text-center p-4  ">
            <img src={asset.saftey} alt="Secure Payment" className="mb-4" />
            <h3 className="font-bold uppercase">Secure Payment</h3>
            <p className="text-gray-600">100% Secure Payment</p>
          </div>

          <div className="flex flex-col items-center text-center p-4  ">
            <img src={asset.carry} alt="Best Price" className="mb-4" />
            <h3 className="font-bold uppercase">Best Price</h3>
            <p className="text-gray-600">Guaranteed Price</p>
          </div>

          <div className="flex flex-col items-center text-center p-4  ">
            <img src={asset.headphone} alt="Free Returns" className="mb-4" />
            <h3 className="font-bold uppercase">Free Returns</h3>
            <p className="text-gray-600">Within 30 Days returns</p>
          </div>

        </div>
      </section>
      {/* section 3 new arrival */}
      <FeaturedAuthoer />
      <h2 className="text-6xl font-extrabold text-center p-[30px] mb-12">Recently Added</h2>
      <Newproducts/>

      {/* section 4 */}
      <div className=" bg-fixed overflow-hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoAMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAAAQYDBAUCB//EAEYQAAEEAQECCAcMCQUBAAAAAAEAAgMEEQUGIRIxQVFhgZTRExQVInGR0gcWIzJCUlNUgpOhwRdWYoSSorHh8CQzRFVkNf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAaEQEBAQADAQAAAAAAAAAAAAAAARECEiFh/9oADAMBAAIRAxEAPwD9oKiIgKIiAiIgKIiAiIgiIiAiIgIiIIVFSogKIVEHOiIUEREQFFVEBERAKiqiAiIgIiICIiCFQqlQoIVCqVCg50REERVRAQoiCIqogIiIIiqIIiIgIiIIUVUwgiiqIOZRVEEREQRFVEBERAUVRBEVRBEVRB8oqiCIqogYUIVRByIqogIiIIiqIIiqIIiqiAiIgKKogiIiAoqogKKlRByoqiCIhRBEwqg40HX8ZY6Lhx78g49KR24ng4eCRjOOkZXkw34Iq72El0sT3scwDeCHHd/nOvA2J1d9yfValwtjsV7AIaT8hzRgjozlZ7etY21Ww2w15bxseWkcy5l4WnXWs12xS5JYmzMd84jc71eb617uVqM0UKZQlARQuABJIAHGSsvqW0Ehts8TPwUTs5+k/sg1Ki6lDUa14OEDvOYAXNPGMj8f7LtIKooplB9KZUyoSg7C4p7EMGPDSsjzxcI4yuRY3ae54TUzE05ELQ3rO8/1Qac6nR+txfxL58qUPrUfrWD8PndvXyZWqprenVqH1uP1qHV9PH/Lj/FYB03NnC681gtaTzBRWn1WeqdSL6k7HtsMy4N5Ht7xj1LFvn8lbWVb7yGw2D4rY34GHHLD1O3faXmWdXlivVjGfizNJHON4I6wcL3Nfoxapprg05jmjy146RuI9eVz5ectdON3jjT6sTXbX1OMYfSkD385j4nj1b/SFropGyxMkacteMhYjZXUTrOgwy2B8NwTDYbzSN81347+te3slM4U5aEpzJSeY887eNv8pHWtxiveUUWc2j1rwQdTqu8/ikeOToHSqji2h1jwpdUqu+DBxI4fKPMOhZ2SZkcbnyODWtGSTyLjfI1oJcQGgZJ5gF39I051pzbdtpbE08KGN277bvyH+BuLJrk0dl+vnUuA4Pbgsrcr4vlB37R4xzEAc62taxFarxzwODo5G5a4cqzjXw3Z31vGo4YIziZ/hA12fmt6ec8np4vbit6bXhZDDZqRxsaGta2RoAAUnq3J5Hdyoup5TofXa33oX1FqFKV4jjtQPe7cGtkBJVZdlROJRBzl3Ssff0nT7mpXHu8ZBEuCRO7BOATjfznC1T96wmq7HUdR1q7YF67E5z2l8cU5YwOLQdwHF35KlWO1739M57H37+9Pe/pX/o7Q/vXnfo/o4/8Ao6h2l3en6P6HLev9dl3eivQOz2l80/aH96+XbOaUePw337u9dD9H+nfW7p/eHd6H3P8ATfrVvtDu9By2dlNFLeF4N/DG9pMrtxHWunpzIGVpNPidnwGQ1ufityRjqwfwX3L7nWmSMIdYsuzzzO71jbFhuye3NagbBNMw4dw3cIhrjuyecFufQVnlNizytVs3K7TNpLFM7oL7PCs5hK3AcOtuD9krUeFGn65XtZAhtDwEvNwhvaf6jrCye0MEsYjt1m5sVZGzxY4yW8besZb1rUW2Ra5s+XVn5E8QkgkHIeNpH4KcKvOY720musosdWgf8O4byDngDvWHluNJPnenJWEv6rdivYkmlc5xcHcNxJ4QOD+S22xuiS6mxt7UW4q/IjcP9zpP7P8AVdL5655r19E003iy1abiu05jjPyzyOPRzBfG1208enZ0+lIPGnDz3DHwIP583rTbLa2HRX1dLplr9SuyNijb9EHHHDP5DlXms9z3hSSSyX5nyPeXuc88Ikk541z+10+R59G22RoAxgdK9AYIyu5BsS+H4tw9bAuy3ZiwBjx3+QLXaM9a8kgFVjixwc0kOByCDjC9b3tWPrp/gCh2asHiuE/YCvaHWtRs3rI1Kv4KZ3+qiHnftj5w/Ne0sPpOgWoNTrytvPYGEklrBkjHF18S2uU3UsxyPXg6hp1Z08lgibwkhBeWzvaCQAOIHHEFpSAVwSxMfucxpHoRGBq7NuutkkZr+rhokcwtNniIOOZc/vPPLr2rn97PctONB08Oe5sUrC9xe4MsSNBJ49wduTyFR+bY7XL7SLrL+84f97q/bCg2PwN2u6t2xy0x0GieSz2uX2lPIFHms9rl9pU1mvek8cWvav2s9y8i77mGmXLJtWrdyeU/GdLLwi4cx3Ld+9+iOSz2uX2l8O2eoHks9sm9pTDWB0qx4zp01aaQOs0ZnV5Txl3B+KT6W468r0thLrWeO6M5wL6b+HG3hZIjfkgHmweEMc2Fqa2zOl1fDeL0Y2um/wB1wJ4T+knOSeldehsTolC2+3RpCpO9pa58Dy0uB51mcMq3lrGWdlKlvbSQ2XtEI/1LYTxyE7j1AgE+kL0dutr6myemAR8B92QYrwfmeYBaF+wujSamzUnttuuR/EmdemJb0DzsY6MYXxd9z7Z29PLPc08WJpTlz5pHvPVk7h6E66u5H5zpnudO1c1Nduaradfmayw55Ldz9xGN3F0LY+Rdd/WCfqij9le/V2UoVIIoK5txxRMDGMbclwAOL5S7A2frfSWu1yd62yzHkbXf1gsfdxeynkXXTx7Q2Puo/ZWo8g1fn2u1ye0qNArfSWe1Sd6GssdD1s8e0drqji9hcFrQ9ahryynae6BGwvPmRcQGfmLYeQKvz7PapPaXHLs1TmY5kj7Ra4YINuXBHN8ZTDXlbPQV7lOtJLYszSsDS55lLeE4cpA3dS04XDS0mrRY1laIMDRgb87h0rt+DCqObKiIgIoiAiiICIiAqoioqIigmUREBERBVMoiBlMqIg//2Q==)' }}>
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl font-extrabold text-black mb-4">Shop wide range of collections</h1>
          <h2 className="text-6xl font-bold text-[#800000] mb-8">BOOK FESTIVAL</h2>
          <p className="text-6xl font-extrabold  text-black mb-6">ALL BOOKS ARE FLAT 50% OFF</p>
          <button
            className="bg-red-600 mb-8 text-white px-6 py-3 rounded hover:bg-red-500"
            onClick={handleContinueShopping}
          >
            shop now
          </button>
        </div>
      </div>

      {/* section 5 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          BEST AUTHOR OF THE WEEK
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Book Covers */}
          <div className="flex space-x-4 justify-center lg:justify-start">
            <img
              src={asset.pd6}
              alt="Book 1"
              className="w-40 h-auto rounded-lg shadow-md"
            />
            <img
              src={asset.pd9}
              alt="Book 2"
              className="w-40 h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Author Image */}
          <div className="flex justify-center">
            <img
              src={asset.author}
              alt="Author"
              className="w-58 h-58 rounded-full shadow-lg"
            />
          </div>

          {/* Author Details */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold">Dwayne Johnson</h3>
            <p className="italic text-gray-600">Author</p>
            <p className="mt-4 text-gray-700">
              "Pellentesque posuere orci lobortis scelerisque blandit. Donec id
              tellus lacinia an, tincidunt risus ac, consequat velit."
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">My Awards</h4>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <img
                  src={asset.award}
                  alt="Award 1"
                  className="w-12 h-12 mx-auto"
                />
                <img
                  src={asset.award}
                  alt="Award 2"
                  className="w-12 h-12 mx-auto"
                />
                <img
                  src={asset.award}
                  alt="Award 3"
                  className="w-12 h-12 mx-auto"
                />
                <img
                  src={asset.award}
                  alt="Award 4"
                  className="w-12 h-12 mx-auto"
                />
                <img
                  src={asset.award}
                  alt="Award 5"
                  className="w-12 h-12 mx-auto"
                />
                <img
                  src={asset.award}
                  alt="Award 6"
                  className="w-12 h-12 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 */}

      <div className="  overflow-hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/home-improvement-decoration-concept-still-600nw-2038822685.jpg)' }}>
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl font-extrabold text-black mb-4">Special Offer</h1>
          <h2 className="text-6xl font-bold text-red-600 mb-8">BOOK FESTIVAL</h2>
          <p className="text-lg text-black mb-6">ALL BOOKS ARE FLAT 30% OFF</p>
          <button
            className="bg-red-600 mb-8 text-white px-6 py-3 rounded hover:bg-red-500"
            onClick={handleContinueShopping}
          >
            shop now
          </button>
        </div>
      </div>
      {/* 7 */}

      <LatestNews />
      {/* 8 */}
      <div className=" bg-fixed overflow-hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/a5/a9/40/a5a940739475319b85788677a382f908.jpg)' }}>
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl font-extrabold text-black mb-4">Wonder Full Gifts</h1>
          <h2 className="text-6xl font-bold text-red-600 mb-8">BOOK FESTIVAL</h2>
          <p className="text-lg text-black mb-6">ALL BOOKS ARE FLAT 50% OFF</p>
          <button
            className="bg-red-600 mb-8 text-white px-6 py-3 rounded hover:bg-red-500"
            onClick={handleContinueShopping}
          >
            shop now
          </button>
        </div>
      </div>
      {/* 9 */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">SUBSCRIBE TO OUR NEWS LETTER</h2>
          <p className="text-gray-600 mb-8">
            Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-1/2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50 mr-4 mb-4 md:mb-0"
            />
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home
