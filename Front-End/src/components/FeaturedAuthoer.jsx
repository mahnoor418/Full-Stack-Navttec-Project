import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productsdata } from './CardData';

function FeaturedAuthor() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/productsdata/${id}`);
    };

    return (
        <div className="max-w-5xl mx-auto my-10">
            {/* New Arrival Heading */}
            <h2 className="text-6xl font-extrabold text-center p-[30px] mb-12">New Arrival</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {productsdata.map(product => (
                    <div
                        key={product.id}
                        className=" p-4 w-full max-w-96  mx-auto"
                        onClick={() => handleClick(product.id)}
                    >
                        <div className="relative">
                            {product.discount && (
                                <span className="absolute top-0 left-0 bg-red-500 text-xs font-bold px-2 py-1">
                                    {product.discount}
                                </span>
                            )}
                            <img
                                src={product.image}
                                alt={product.title}
                                className="object-cover h-62 w-full"
                            />
                        </div>
                        <div className="p-2">
                            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                            <p className="text-sm text-gray-500">{product.author}</p>
                            <p className="text-lg font-bold">
                                {product.price}
                                {product.oldPrice && (
                                    <span className="line-through text-gray-400 ml-2">
                                        {product.oldPrice}
                                    </span>
                                )}
                            </p>
                            <p className="text-sm text-gray-500">{product.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedAuthor;
