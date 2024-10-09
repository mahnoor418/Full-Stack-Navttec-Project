import React from 'react';
import { useNavigate } from 'react-router-dom';
import Filters from '../Pages/Filter';
import { asset } from '../assets/assets';


const BestSeller = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            title: 'Adventurous Eating',
            author: 'James Dylan',
            price: '$20.00',
            rating: '5.0 / 5.0',
            image: asset.pd4,
        },
        {
            id: 2,
            title: 'Beauty of Structures',
            author: 'Jayden Judah',
            price: '$40.00',
            rating: '4.0 / 5.0',
            image: asset.pd2,
        },
        {
            id: 3,
            title: 'Books For a Cause',
            author: 'Jayden Judah',
            price: '$10.00',
            oldPrice: '$20.00',
            discount: '50%',
            rating: '5.0 / 5.0',
            image: asset.pd3,
        },
        {
            id: 4,
            title: 'Erik Martin',
            author: 'James Dylan',
            price: '$20.00',
            rating: '5.0 / 5.0',
            image: asset.pd10,
        },
        {
            id: 5,
            title: 'Daffodills',
            author: 'James Dylan',
            price: '$20.00',
            rating: '5.0 / 5.0',
            image: asset.pd11,
        },
        {
            id: 6,
            title: 'Erik Martin',
            author: 'James Dylan',
            price: '$60.00',
            rating: '5.0 / 5.0',
            image: asset.pd7,
        },
    ];


    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div>
            {/* Header Section */}
            <div className="text-center text-black mb-12 text-4xl font-bold mb-2 ">
                <div className=" inset-0   bg-cover pt-[100px] pb-[50px] " style={{ backgroundImage: `url(${asset.bg})` }} >
                    <h1 className="text-black">Happy Selling </h1>
                </div>
            </div>


            <div className=' flex '>
                <section >
                    <Filters />
                </section>


                <div className=" relative  max-w-5xl mx-auto  my-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">

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

export default BestSeller;
