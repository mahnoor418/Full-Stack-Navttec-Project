import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Review from '../Pages/Reviews';
import Description from '../Pages/Description';
import ShippingInfo from '../Pages/ShippingInfo';
import { useCart } from '../components/CartContext';

const NewProductDetail = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { _id } = useParams(); // Using _id directly here

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('description');
  
  const [quantity, setQuantity] = useState(1);

  // Log the _id from useParams to check if it's being passed
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/product/getproduct/${_id}`);
        if (response.data.success) {
          setProduct(response.data.productData);  // Use response.data.productData
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [_id]); // Depend on _id, make sure to fetch the correct product by its ID
  console.log("Product ID from params:", _id);

  // const handlereview = () => {
  //   console.log(_id);
  //   navigate(`/reviews/${_id}`);
  // };

  const handleAddToCart = () => {
    addItem(product);
    navigate('/AddtoCart');
  };

  const handleBuyNow = () => {
    addItem(product);
    navigate('/checkout');
  };

  if (loading) {
    return <p>Loading product...</p>;
  }
  console.error("Error fetching product:", error);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={`http://localhost:5000/upload/${product.image}`}
            alt={product.title}
            className="object-cover p-[100px] !h-55"
          />
        </div>

        <div className="flex-grow mt-6 lg:mt-0 pt-[100px]">
          <h2 className="text-5xl font-semibold pb-3">{product.title}</h2>
          <p className="mt-4 text-gray-700 pb-3">{product.description}</p>
          <p className="mt-2 text-lg font-bold">${product.price}</p>
          <p className="mt-4 font-bold text-2xl text-gray-600 pb-3">Vendor: {product.author} || Permanent</p>

          <div className="mt-4 space-y-4">
            <p className='font-bold text-2xl pb-3'>Type: {product.type || 'N/A'}</p>
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
            <p className='font-bold text-2xl pt-7'>Publication Date: {product.publicationDate || 'N/A'}</p>
            <p className='font-bold text-2xl pt-7'>Availability: {product.stock || 'Out of stock'}</p>
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
            <p className='flex gap-4 font-bold'>Estimated delivery: 5-7 days</p>
            <p className='flex gap-4 font-bold'>197 People are viewing this right now</p>
            <p className='flex gap-4 font-bold'>Share</p>
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
      
          {/* <button
            className={`py-2 px-4 ${activeSection === 'reviews' ? 'bg-red-600' : 'bg-black'} text-white hover:bg-gray-800 focus:outline-none`}
            onClick={handlereview}
          >
            Reviews
          </button> */}
        </div>
        <Review productId={_id} />
        {/* Description Section */}
        {activeSection === 'description' && (<Description />)}
        
        {/* Shipping Information Section */}
        {activeSection === 'shipping' && (<ShippingInfo />)}
        
        {/* Review Section */}
        {activeSection === 'reviews' && (<Review productId={_id} />)}
      </div>
    </div>
  );
};

export default NewProductDetail;
