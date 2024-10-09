// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { asset } from '../assets/assets';
// import {  FaSearch, FaShare } from "react-icons/fa";
// import {FaCarOn} from "react-icons/fa6"
// import Description from '../Pages/Description';
// import ShippingInfo from '../Pages/ShippingInfo';
// import { useCart } from '../components/CartContext';

// const ProductDetail = () => {
//   const { addItem } = useCart();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const products = [
//     {
//       id: 1,
//       title: 'Adventurous Eating',
//       author: 'James Dylan',
//       price: '$20.00',
//       rating: '5.0 / 5.0',
//       image: asset.bookcover1,
//     },
//     {
//       id: 2,
//       title: 'Beauty of Structures',
//       author: 'Jayden Judah',
//       price: '$40.00',
//       rating: '4.0 / 5.0',
//       image: asset.bookcover2,
//     },
//     {
//       id: 3,
//       title: 'Books For a Cause',
//       author: 'Jayden Judah',
//       price: '$10.00',
//       oldPrice: '$20.00',
//       discount: '50%',
//       rating: '5.0 / 5.0',
//       image: asset.bookcover5,
//     },
//     {
//       id: 4,
//       title: 'Erik Martin',
//       author: 'James Dylan',
//       price: '$20.00',
//       rating: '5.0 / 5.0',
//       image: asset.bookcover4,
//     },
//     {
//       id: 5,
//       title: 'Daffodills',
//       author: 'James Dylan',
//       price: '$20.00',
//       rating: '5.0 / 5.0',
//       image: asset.bookcover5,
//     },
//     {
//       id: 6,
//       title: 'Erik Martin',
//       author: 'James Dylan',
//       price: '$60.00',
//       rating: '5.0 / 5.0',
//       image: asset.bookcover6,
//     },
//     {
//       id: 7,
//       title: 'Erik Martin',
//       author: 'James Dylan',
//       price: '$60.00',
//       rating: '5.0 / 5.0',
//       image: asset.pd12,
//     },
//     {
//       id: 8,
//       title: 'Erik Martin',
//       author: 'James Dylan',
//       price: '$60.00',
//       rating: '5.0 / 5.0',
//       image: asset.pd11,
//     },
//   ];


//   const product = products.find(product => product.id === parseInt(id));
//   const [activeSection, setActiveSection] = useState('description');

//   if (!product) {
//     return <p>Product not found!</p>;
//   }

//   const handleAddToCart = () => {
//     addItem(product);
//     navigate('/AddtoCart');
//   };

//   const handleBuyNow = () => {
//     addItem(product);
//     navigate('/checkout');
//   };

//   const handleReviewButtonClick = () => {
//     navigate(`/review/${id}`); // Navigate to review page with product ID
//   };

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <div className="flex flex-col lg:flex-row lg:space-x-8">
//         {/* Image Section */}
//         <div className="flex-shrink-0 w-full lg:w-1/2">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="object-cover p-[100px] h-55"
//           />
//         </div>

//         <div className="flex-grow mt-6 lg:mt-0 pt-[100px]">
//           <h2 className="text-5xl font-semibold pb-3">{product.title}</h2>
//           <p className="mt-4 text-gray-700 pb-3">{product.description}</p>
//           <p className="mt-2 text-lg font-bold">{product.price}</p>
//           <p className="mt-4 font-bold text-2xl text-gray-600 pb-3">Vendor: {product.author}</p>

//           {/* Product Details */}
//           <div className="mt-4 space-y-4">
//             <p className='font-bold text-2xl pb-3'>Type: Sugar Flakes</p>
//             <p className='font-bold text-2xl pt-7'>Publication Date: 24 May 2023</p>
//             <p className='font-bold text-2xl pt-7'>Availability: 12 in stock</p>
//           </div>

//           {/* Buttons */}
//           <div className="mt-6 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
//             <button
//               className="bg-red-600 text-white px-4 py-2 rounded"
//               onClick={handleAddToCart}
//             >
//               Add to Cart
//             </button>
//             <button
//               className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none"
//               onClick={handleBuyNow}
//             >
//               Buy Now
//             </button>
//           </div>

//           <div className="mt-6 text-gray-600 pt-7">
//             <p className='flex gap-4 font-bold'><FaCarOn />Estimated delivery: 5-7 days</p>
//             <p className='flex gap-4 font-bold'> <FaSearch />197 People are viewing this right now</p>
//             <p className='flex gap-4 font-bold'><FaShare />share</p>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 md:p-10">
//         {/* Navigation Buttons */}
//         <div className="flex gap-4 items-center mb-6 border-gray-300">
//           <button
//             className={`py-2 px-4 ${activeSection === 'description' ? 'bg-red-600' : 'bg-black'} text-white hover:bg-red-700 focus:outline-none`}
//             onClick={() => setActiveSection('description')}
//           >
//             Description
//           </button>
//           <button
//             className={`py-2 px-4 ${activeSection === 'shipping' ? 'bg-red-600' : 'bg-black'} text-white hover:bg-gray-800 focus:outline-none`}
//             onClick={() => setActiveSection('shipping')}
//           >
//             Shipping Information
//           </button>
//           <button
//             className={`py-2 px-4 ${activeSection === 'reviews' ? 'bg-red-600' : 'bg-black'} text-white hover:bg-gray-800 focus:outline-none`}
//             onClick={handleReviewButtonClick}
//           >
//             Reviews
//           </button>
//         </div>

//         {/* Description Section */}
//         {activeSection === 'description' && (<Description />)}

//         {/* Shipping Information Section */}
//         {activeSection === 'shipping' && (<ShippingInfo />)}
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { asset } from '../assets/assets';
import { FaCarOn } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import Review from '../Pages/Reviews';
import Description from '../Pages/Description';
import ShippingInfo from '../Pages/ShippingInfo';
import { useCart } from '../components/CartContext';

const ProductDetail = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    addItem(product);
    navigate('/AddtoCart');
  };

  const handleReviewButtonClick = () => {
    navigate('/review');
  };

  const handleBuyNow = () => {
    addItem(product);
    navigate('/checkout');
  };

  const [activeSection, setActiveSection] = useState('description');
  const { id } = useParams();

  const products = [
    { 
      productId:1,
      id: 1,
      title: 'Adventurous Eating',
      author: 'James Dylan',
      price: 20.00,
      rating: '5.0 / 5.0',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      image: asset.pd4,
    },
    { 
      productId:2,
      id: 2,
      title: 'Beauty of Structures',
      author: 'Jayden Judah',
      price: 40.00,
      rating: '4.0 / 5.0',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      image: asset.pd2,
    },
    {
      productId:3,
      id: 3,
      title: 'Books For a Cause',
      author: 'Jayden Judah',
      price: 10.00,
      oldPrice: '$20.00',
      discount: '50%',
      rating: '5.0 / 5.0',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      image: asset.pd3,
    },
    {
      id: 4,
      title: 'Erik Martin',
      author: 'James Dylan',
      price: 20.00,
      rating: '5.0 / 5.0',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      image: asset.pd10,
    },
    {
      id: 5,
      title: 'Daffodills',
      author: 'James Dylan',
      price: 20.00,
      rating: '5.0 / 5.0',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      image: asset.pd11,
    },
    {
      id: 6,
      title: 'Erik Martin',
      author: 'James Dylan',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      price: 60.00,
      rating: '5.0 / 5.0',
      image: asset.pd7,
    },
    {
      id: 7,
      title: 'Erik Martin',
      author: 'James Dylan',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      price: 20.0,
      rating: '5.0 / 5.0',
      image: asset.pd8,
    },
    {
      id: 8,
      title: 'Erik Martin',
      author: 'James Dylan',
      price: 120.00,
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      rating: '5.0 / 5.0',
      image: asset.pd9,
    },
    {
      id: 9,
      title: 'Erik Martin',
      author: 'James Dylan',
      price: 200.00,
      rating: '5.0 / 5.0',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      image: asset.pd4,
    },
    {
      id: 10,
      title: 'Erik Martin',
      author: 'James Dylan',
      price: 50.00,
      rating: '5.0 / 5.0',
      image: asset.pd12,
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
    },

    {
      id: 11,
      title: 'Erik Martin',
      author: 'James Dylan',
      price: 40.00,
      rating: '5.0 / 5.0',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      image: asset.pd9,
    },
    {
      id: 12,
      title: 'Erik Martin',
      author: 'James Dylan',
      price: 30.00,
      rating: '5.0 / 5.0',
      description: 'About Author: This books author, John, is one of the most popular writers in American history  He was California-born but attended school in New York.  He attended Harvard University to',
      image: asset.pd10,
    },
  ];

  const product = products.find(product => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover p-[100px] !h-55"
          />
        </div>

        <div className="flex-grow mt-6 lg:mt-0 pt-[100px]">
          <h2 className="text-5xl font-semibold pb-3">{product.title}</h2>
          <p className="mt-4 text-gray-700 pb-3">{product.description}</p>
          <p className="mt-2 text-lg font-bold">{product.price}</p>
          <p className="mt-4 font-bold text-2xl text-gray-600 pb-3">Vendor: {product.author}</p>

          <div className="mt-4 space-y-4">
            <p className='font-bold text-2xl pb-3'>Type: Sugar Flakes</p>
            <div className="flex flex-wrap items-center space-x-4">
              <span className='font-bold text-2xl pb-2'>Format:</span>
              <div className="flex flex-wrap space-x-2 mt-2">
                <button className="px-4 py-1 border bg-black text-white">Paperback</button>
                <button className="px-4 py-1 border">Hardcover</button>
                <button className="px-4 py-1 border bg-black text-white">Kindle Edition</button>
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-4">
              <span className='font-bold text-2xl'>Language:</span>
              <div className="flex flex-wrap space-x-2 mt-2">
                <button className="px-4 py-1 border">English</button>
                <button className="px-4 py-1 border bg-black text-white">Spanish</button>
                <button className="px-4 py-1 border">Japanese</button>
              </div>
            </div>
            <p className='font-bold text-2xl pt-7'>Publication Date: 24 May 2023</p>
            <p className='font-bold text-2xl pt-7'>Availability: 12 in stock</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          <div className="mt-6 text-gray-600 pt-7">
            <p className='flex gap-4 font-bold'><FaCarOn />Estimated delivery: 5-7 days</p>
            <p className='flex gap-4 font-bold'><FaSearch />197 People are viewing this right now</p>
            <p className='flex gap-4 font-bold'><FaShare />share</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {/* Navigation Buttons */}
        <div className="flex gap-4 items-center mb-6 border-gray-300">
          <button
            className={`py-2 px-4 ${activeSection === 'description' ? 'bg-red-600' : 'bg-black'} text-white hover:bg-red-700 focus:outline-none`}
            onClick={() => setActiveSection('description')}
          >
            Description
          </button>
          <button
            className={`py-2 px-4 ${activeSection === 'shipping' ? 'bg-red-600' : 'bg-black'} text-white hover:bg-gray-800 focus:outline-none`}
            onClick={() => setActiveSection('shipping')}
          >
            Shipping Information
          </button>
          <button
            className={`py-2 px-4 ${activeSection === 'reviews' ? 'bg-red-600' : 'bg-black'} text-white hover:bg-gray-800 focus:outline-none`}
            onClick={handleReviewButtonClick}
          >
            Reviews
          </button>
        </div>

        {/* Description Section */}
        {activeSection === 'description' && (<Description />)}
        
        {/* Shipping Information Section */}
        {activeSection === 'shipping' && (<ShippingInfo />)}
      </div>
    </div>
  );
};

export default ProductDetail;
