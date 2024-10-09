import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { asset } from '../assets/assets';
import Reviews from '../Pages/Reviews';
import Description from '../Pages/Description';
import ShippingInfo from '../Pages/ShippingInfo';
import { useCart } from '../components/CartContext';

const DProductDetail = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState('description');
  const [quantity, setQuantity] = useState(1);

  // Array with product details
  const products = [
    {
      id: 1,
      title: 'Adventurous Eating',
      author: 'James Dylan',
      price: '$20.00',
      rating: '5.0 / 5.0',
      image: asset.bookcover1,
      description: 'Explore adventurous cuisines from around the world.',
    },
    {
      id: 2,
      title: 'Beauty of Structures',
      author: 'Jayden Judah',
      price: '$40.00',
      rating: '4.0 / 5.0',
      image: asset.bookcover2,
      description: 'A deep dive into structural design and architecture.',
    },
    {
      id: 3,
      title: 'Books For a Cause',
      author: 'Jayden Judah',
      price: '$10.00',
      oldPrice: '$20.00',
      discount: '50%',
      rating: '5.0 / 5.0',
      image: asset.bookcover5,
      description: 'A special book to support a cause with every purchase.',
    },
  ];

  // Find the product by its id
  const product = products.find((product) => product.id === Number(id));


  // Handle Buy Now button
  const handleBuyNow = () => {
    if (product) {
      addItem(product); // Ensure product is passed to addItem function
      navigate('/checkout');
    }
  };

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
            className="object-cover w-full h-64" 
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow mt-6 lg:mt-0">
          <h2 className="text-4xl font-semibold">{product.title}</h2>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <p className="mt-2 text-lg font-bold">{product.price}</p>
          {product.oldPrice && (
            <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
          )}
          <p className="text-lg text-gray-600">Vendor: {product.author}</p>

          <div className="mt-6 space-y-4">
            <button 
              className="px-6 py-2 bg-red-600 text-white w-full sm:w-auto"
              onClick={() => addItem(product)}
            >
              Add to Cart
            </button>
            <button className="px-6 py-2 border w-full sm:w-auto">View Wishlist</button>
            <button
              className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          <div className="mt-6 text-gray-600">
            <p className="flex gap-4">
              <FaCarOn /> Estimated delivery: 5-7 days
            </p>
            <p className="flex gap-4">
              <FaSearch /> 197 People are viewing this right now
            </p>
            <p className="flex gap-4">
              <FaShare /> Share
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="p-6 md:p-10">
        <div className="flex gap-4 items-center mb-6">
          <button
            className={`py-2 px-4 ${activeSection === 'description' ? 'bg-red-600' : 'bg-black'} text-white`}
            onClick={() => setActiveSection('description')}
          >
            Description
          </button>
          <button
            className={`py-2 px-4 ${activeSection === 'shipping' ? 'bg-red-600' : 'bg-black'} text-white`}
            onClick={() => setActiveSection('shipping')}
          >
            Shipping Information
          </button>
          <button
            className={`py-2 px-4 ${activeSection === 'reviews' ? 'bg-red-600' : 'bg-black'} text-white`}
            onClick={() => setActiveSection('reviews')}
          >
            Reviews
          </button>
        </div>

        {/* Active Tab Content */}
        {activeSection === 'description' && <Description />}
        {activeSection === 'shipping' && <ShippingInfo />}
        {activeSection === 'reviews' && <Reviews />}
      </div>
    </div>
  );
};

export default DProductDetail;
