import React from 'react';
import { asset } from "../assets/assets";
import { useNavigate } from 'react-router-dom';

function LatestNews() {
  const navigate = useNavigate();


  const blogData = [
    {
      id: 1,
      title: "Books Changed My Ideology",
      description: "Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac.",
      date: "April 4, 2020",
      author: "Ramamoorthi M",
      image: asset.blogpic1,
    },
    {
      id: 2,
      title: "The Power of Reading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "May 10, 2020",
      author: "Jane Doe",
      image: asset.blogpic2,
    },
    {
      id: 3,
      title: "Books Changed My Ideology Again",
      description: "Another amazing blog post description goes here.",
      date: "June 15, 2020",
      author: "John Smith",
      image: asset.abopic3,
    },
  ];


  const handleLearnMore = (id) => {
    navigate(`/Blog/${id}`);
  };

  return (
    <div className='parent'>
      <h2 className="text-5xl mt-8 font-bold text-center mb-8">Latest News</h2>
      <div className="p-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog) => (
          <div key={blog.id} className="container mx-auto px-4 py-8">
            <img src={blog.image} alt={blog.title} width="400" height="200" />
            <div className="flex justify-between items-center">
              <p className="text-gray-500">{blog.author} {blog.date}</p>
            </div>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-lg mb-6">{blog.description}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={() => handleLearnMore(blog.id)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestNews;


