import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './order.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatDate = (date) => {
        if (!date) return 'N/A'; // If no date, return 'N/A'
        const parsedDate = new Date(date);
        return isNaN(parsedDate.getTime()) ? 'Invalid Date' : parsedDate.toLocaleString(); // Check if date is valid
    };

    // Fetch all orders for a specific user
    const fetchUserOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/order/getorder'); // Adjust your endpoint as necessary
            
            if (response.data.success) {
                setOrders(response.data.orders);
            } else {
                setOrders([]);
                setError('Failed to fetch orders');
            }
            setLoading(false);
        } catch (err) {
            // Handle network errors
            if (!err.response) {
                setError('Network error: Please check your internet connection.');
            } else {
                setError(err.response.data.message || 'Error fetching orders.');
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserOrders();
    }, []);

    return (
        <div className="order-container">
            <h1>Recent Orders</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <table className="order-table">
                <thead>
                    <tr>

                        <th>Order ID</th> 
                        <th>User_Id</th>
                        <th>Payment Method</th>
                        <th>Order Date</th>
                        <th>Delivery Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>Credit Card</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length === 0 ? (
                        <tr>
                            <td colSpan="12">No orders found.</td>
                        </tr>
                    ) : (
                        orders.map((order) => (
                            <tr key={order._id}>
                                <td>{`#ORDER ${order._id.slice(-3)}`}</td>
                                <td>{order.userId}</td>
                                <td>{order.paymentStatus === 'paid' ? 'Card' : 'Unpaid'}</td>
                                <td>{formatDate(order.createdAt)}</td>
                                <td>{formatDate(order.deliveryDate)}</td>
                                <td>
                                    <select
                                        value={order.orderStatus}
                                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                    >
                                        <option value="In Factory">In Factory</option>
                                        <option value="In Routed">In Routed</option>
                                        <option value="Sent">Sent</option>
                                    </select>
                                </td>
                                <td>{`₹${order.totalAmount}`}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.city}</td>
                                <td>{order.postalCode}</td>
                                <td>{order.creditCard}</td>
                                <td>
                                    <button className="view-button">View</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
