import React from 'react';
import { useNavigate } from 'react-router-dom';
import { asset } from '../assets/assets';
const Brands = () => {
    const navigate = useNavigate();

    const products = [

        {
            id: 1,
            title: 'Erik Martin',
            author: 'James Dylan',
            price: '$20.00',
            rating: '5.0 / 5.0',
            image: asset.pd8,
        },
        {
            id: 2,
            title: 'Erik Martin',
            author: 'James Dylan',
            price: '$120.00',
            rating: '5.0 / 5.0',
            image: asset.pd9,
        },
        {
            id: 3,
            title: 'Erik Martin',
            author: 'James Dylan',
            price: '$200.00',
            rating: '5.0 / 5.0',
            image: asset.pd4,
        },
        {
            id: 4,
            title: 'Erik Martin',
            author: 'James Dylan',
            price: '$50.00',
            rating: '5.0 / 5.0',
            image: asset.pd12,
        },

        {
            id: 5,
            title: 'Erik Martin',
            author: 'James Dylan',
            price: '$40.00',
            rating: '5.0 / 5.0',
            image: asset.pd9,
        },
        {
            id: 6,
            title: 'Erik Martin',
            author: 'James Dylan',
            price: '$30.00',
            rating: '5.0 / 5.0',
            image: asset.pd10,
        },



    ];

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (

        <div className='parent'>
            {/* Header Section */}
            <div className="text-center text-black mb-12 text-4xl font-bold mb-2 ">
                <div className=" inset-0   bg-cover pt-[100px] pb-[50px] " style={{ backgroundImage: `url(${asset.bg})` }} >
                    <h1 className="text-black">Brand</h1>
                    <p className="text-black"> Best Brand </p>
                </div>
            </div>

            <div className='  flex '>
                <div className=" max-w-5xl mx-auto  my-10">
                    <div className="grid grid-cols-4   sm:grid-cols-2  md: grid-cols-3 lg:grid-cols-4   gap-8 ">
                        {products.map(product => (
                            < div
                                key={product.id}
                                className="border-2  "
                                onClick={() => handleClick(product.id)}
                            >
                                < div className="">
                                    {product.discount && (
                                        <span className=" absolute top-0 left-0 bg-red-500  text-xs font-bold px-2 py-1">{product.discount}</span>
                                    )}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className=" object-cover  ! h-3/4  cursor-pointer"
                                    />
                                </div>
                                <div className="p-4 ">
                                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                    <p className="text-sm text-gray-500">{product.author}</p>
                                    <p className="text-lg font-bold">
                                        {product.price}
                                        {product.oldPrice && (
                                            <span className="line-through text-gray-400 ml-2">{product.oldPrice}</span>
                                        )}
                                    </p>
                                    <p className="text-sm text-gray-500">{product.rating}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;


