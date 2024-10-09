import React from 'react'
import { dailydeals } from './CardData';
import { useNavigate } from 'react-router-dom';
function DailyDeals() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/dailydeals/${id}`);
    };

    return (
        <div className="max-w-5xl mx-auto my-10">
            {/* Daily deals */}
            <h2 className="text-3xl font-bold text-center mb-8"></h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {dailydeals.map(product => (
                    <div
                        key={product.id}
                        className="border-2 p-4 w-full max-w-96  mx-auto"  // Set smaller card size
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
                                className="object-cover h-52 w-full"
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
    )
}

export default DailyDeals
