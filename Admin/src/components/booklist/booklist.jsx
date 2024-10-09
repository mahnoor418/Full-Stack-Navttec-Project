import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './booklist.css';

const List = ({ url }) => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null); // State to handle the item being edited
  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    quantity: '',
    price: '',
    image: ''
  });

  const fetchList = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/getproduct`);
      if (response.data.success) {
        setItems(response.data.getProducts);
      } else {
        toast.error("Error fetching items");
      }
    } catch (error) {
      console.error("There was an error fetching the list:", error);
      toast.error("Failed to fetch data");
    }
  };

  const removeItem = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/product/deleteproduct/${itemId}`);
      if (response.data.success) {
        toast.success("Item removed!");
        await fetchList();
      } else {
        toast.error("Failed to remove item.");
      }
    } catch (error) {
      console.error("There was an error removing the item:", error);
      toast.error("Error removing the item");
    }
  };

  const openEditModal = (item) => {
    setEditItem(item);
    setForm({
      title: item.title,
      category: item.category,
      description: item.description,
      quantity: item.quantity,
      price: item.price,
      image: item.image,
    });
  };

  const updateItem = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/product/updateproduct/${editItem._id}`, form);
      if (response.data.success) {
        toast.success("Item updated successfully!");
        setEditItem(null); // Close modal after update
        await fetchList(); // Refresh list
      } else {
        toast.error("Failed to update item.");
      }
    } catch (error) {
      console.error("Error updating the item:", error);
      toast.error("Error updating the item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Book List</p>
      <div className="list-table">
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Title</b>
          <b>Description</b>
          <b>Category</b>
          <b>Price</b>
          <b>Quantity</b>
          <b>Action</b>
        </div>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item._id} className='list-table-format'>
              <img src={""} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <div className='action-buttons'>
                <p onClick={() => removeItem(item._id)} className='cursor'>Delete</p>
                <p onClick={() => openEditModal(item)} className='cursor'>Update</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>

      {/* Modal for editing */}
      {editItem && (
        <div className='modal'>
          <h2>Edit Product</h2>
          <input 
            type="text" 
            value={form.title} 
            onChange={(e) => setForm({ ...form, title: e.target.value })} 
            placeholder="Title" 
          />
          <input 
            type="text" 
            value={form.category} 
            onChange={(e) => setForm({ ...form, category: e.target.value })} 
            placeholder="Category" 
          />
          <textarea 
            value={form.description} 
            onChange={(e) => setForm({ ...form, description: e.target.value })} 
            placeholder="Description" 
          />
          <input 
            type="number" 
            value={form.quantity} 
            onChange={(e) => setForm({ ...form, quantity: e.target.value })} 
            placeholder="Quantity" 
          />
          <input 
            type="number" 
            value={form.price} 
            onChange={(e) => setForm({ ...form, price: e.target.value })} 
            placeholder="Price" 
          />
          <input 
            type="text" 
            value={form.image} 
            onChange={(e) => setForm({ ...form, image: e.target.value })} 
            placeholder="Image URL" 
          />
          <button onClick={updateItem}>Save Changes</button>
          <button onClick={() => setEditItem(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default List;
