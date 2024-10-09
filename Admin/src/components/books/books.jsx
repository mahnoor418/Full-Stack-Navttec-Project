import React, { useState } from 'react';
import './books.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Books = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '',
    quantity: '1',
    price: '',
    category: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    
    try {
      const formData = new FormData(); // Use FormData to handle the image file
      formData.append('title', data.name);
      formData.append('description', data.description);
      formData.append('price', data.price);
      formData.append('category', data.category);
      formData.append('quantity', data.quantity);
      formData.append('image', image); // Append image to FormData

      // Send the product data with image
      const response = await axios.post('http://localhost:5000/product/createproduct', formData);

      if (response.data.success) {
        // Reset form after successful submission
        setData({ name: '', description: '', price: '', category: '', quantity: '1' });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error adding product');
    }
  };

  return (
    <div className='add'>
      <form onSubmit={onSubmitHandle} className='flex-col' encType='multipart/form-data'>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name='name'
            placeholder='Type Here'
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder='Write Content here!'
            required
          ></textarea>
        </div>
        <div className="add-product-quantity flex-col">
          <p>Quantity</p>
          <input
            onChange={onChangeHandler}
            value={data.quantity}
            type="number"
            name="quantity"
            placeholder='Enter Quantity'
            min="1"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" required>
              <option value="" disabled>Select a category</option>
              <option value="History">History</option>
              <option value="Cooking">Cooking</option>
              <option value="Economics">Economics</option>
              <option value="Political">Political</option>
              <option value="Comics">Comics</option>
              <option value="Story">Story</option>
              <option value="Novels">Novels</option>
              <option value="Islamic">Islamic</option>
            </select>
          </div>
          <div className="add-price">
            <p>Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name='price'
              placeholder='$10'
              required
            />
          </div>
        </div>
        <div className="add-product-image flex-col">
          <p>Product Image</p>
          <input 
            onChange={(e) => setImage(e.target.files[0])} 
            type="file" 
            id='image' 
            required 
          />
        </div>
        <button type='submit' className='add-button'>Add</button>
      </form>
    </div>
  );
};

export default Books;
