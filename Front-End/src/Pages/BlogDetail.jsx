import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { asset } from '../assets/assets';

const BlogDetail = () => {
  const { id } = useParams();


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


  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <img className="w-full h-auto object-cover mb-8" src={blog.image} alt={blog.title} />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 text-lg mb-2">{blog.author} | {blog.date}</p>
        <p>Ldsus in hendrerit gravida rutrum quisque?
          Violette: A arcu cursus vitae congue. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Sagittis id consectetur purus ut faucibus pulvinar. Nec nam aliquam sem et tortor consequat. Non enim praesent elementum facilisis leo vel fringilla.
          Pretium nibh ipsum consequat nisl. Non arcu risus quis varius quam quisque id diam vel.
          Aliquet bibendum enim facilisis gravida neque convallis a cras semper arcu risus quis varius quam :
          Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Scelerisque varius morbi enim nunc faucibus. Sollicitudin ac orci phasellus egestas tellus rutrum tellus.
          Varius morbi enim nunc faucibus a pellentesque sit amet. Molestie at elementum eu facilisis sed. Faucibus nisl tincidunt eget nullam. Sed viverra tellus in hac habitasse.Posuere ac ut consequat semper pellentesque sit amet viverra nam. </p>
        <p className="text-lg leading-relaxed mb-8">{blog.content}</p>
        <Link to="/blog">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200">
            ← Back to Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
