import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';
import BookingListUserBased from '../BookingListUserBased/BookingListUserBased';

const BookingList = () => {
    
    const [bookings, setBooking] = useState([]);
    const user = JSON.parse(localStorage.getItem('user')) || {};
    
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(response => response.json())
            .then(data => setBooking(data))
    }, [])

    return (
        <div className="container">
            <h2 className="mb-5">Your Total Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    bookings.map(booking => <BookingListUserBased booking={booking}></BookingListUserBased>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;