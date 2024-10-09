import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../assets/assets';

const Blog = () => {

  const blogData = [
    {
      id: 1,
      title: "Books Changed My Ideology",
      description: "Adipiscing enim eu turpis egestas pretium aenean pharetra magna.",
      author: "Ramamoorthi M",
      date: "April 4, 2020",
      image: asset.blogpic1,
    },
    {
      id: 2,
      title: "The Power of Reading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Jane Doe",
      date: "March 15, 2021",
      image: asset.blogpic2,
    },
    {
      id: 3,
      title: "The Power of Reading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Jane Doe",
      date: "March 15, 2021",
      image: asset.blogpic3,
    },
    {
      id: 4,
      title: "The Power of Reading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Jane Doe",
      date: "March 15, 2021",
      image: asset.blogpic4,
    },
    {
      id: 5,
      title: "The Power of Reading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Jane Doe",
      date: "March 15, 2021",
      image: asset.blogpic5,
    },
    {
      id: 6,
      title: "The Power of Reading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Jane Doe",
      date: "March 15, 2021",
      image: asset.blogpic6,
    },
  ];

  return (
    <div className="container p-[50px] mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog) => (
          <div key={blog.id} className="max-w-sm rounded overflow-hidden  mx-auto">
            <img className="w-full h-58 object-cover" src={blog.image} alt={blog.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{blog.title}</div>
              <p className="text-gray-700 text-base">{blog.description}</p>
              <p className="text-gray-500 text-sm mb-4">{blog.author} | {blog.date}</p>
              <Link to={`/blog/${blog.id}`}>
                <button className="bg-red-600 text-white px-4 py-2 mb-8 rounded hover:bg-red-700 transition duration-200">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
