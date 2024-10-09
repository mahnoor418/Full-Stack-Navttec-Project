import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios
import { toast } from 'react-toastify'; // Import toast if you're using it for notifications

const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]); // Change 'items' to 'products' for clarity
    const [loading, setLoading] = useState(true); // To handle loading state
    const [error, setError] = useState(null); // To handle errors

    // Fetch the product list when the component mounts
    const fetchList = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/product/getproduct`);
            if (response.data.success) {
                setProducts(response.data.getProducts); // Set products if the response is successful
            } else {
                toast.error("Error fetching items");
            }
        } catch (error) {
            console.error("There was an error fetching the list:", error);
            toast.error("Failed to fetch data");
        } finally {
            setLoading(false); // Set loading to false in both success and error cases
        }
    };

    useEffect(() => {
        fetchList(); // Call the fetchList function on component mount
    }, []); // Empty dependency array means this runs once when the component mounts

    // Use _id from the product to navigate to the product detail page
    const handleClick = (_id) => {
        navigate(`/newproductdetail/${_id}`); // Use _id instead of id
    };

    if (loading) {
        return <p>Loading products...</p>; // Display a loading message while fetching
    }

    if (error) {
        return <p>Error loading products: {error}</p>; // Display an error message if there is an error
    }

    return (
        <div className='parent flex'>
            <div className="relative max-w-5xl mx-auto my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.length === 0 ? (
                        <p>No products found.</p> // Message if no products are available
                    ) : (
                        products.map(product => (
                            <div
                                key={product._id} // Use _id as the key
                                className="border-2"
                                onClick={() => handleClick(product._id)} // Use _id for navigation
                            >
                                <div className="">
                                    {product.discount && (
                                        <span className="absolute top-0 left-0 bg-red-500 text-xs font-bold px-2 py-1">
                                            {product.discount}
                                        </span>
                                    )}
                                    <img
                                        src={`http://localhost:5000/upload/${product.image}`}
                                        alt={product.title}
                                        className="object-cover h-3/4 cursor-pointer"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                    <p className="text-sm text-gray-500">{product.author}</p>
                                    <p className="text-lg font-bold">
                                        $ {product.price}
                                        {product.oldPrice && (
                                            <span className="line-through text-gray-400 ml-2">{product.oldPrice}</span>
                                        )}
                                    </p>
                                    <p className="text-sm text-gray-500">{product.rating}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
