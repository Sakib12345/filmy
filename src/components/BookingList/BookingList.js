import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';
import BookingListUserBased from '../BookingListUserBased/BookingListUserBased';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const BookingList = () => {

    const [bookings, setBooking] = useState([]);
    const user = JSON.parse(localStorage.getItem('user')) || {};

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(response => response.json())
            .then(data => setBooking(data))
    }, [])

    return (
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-8 m-5'>
                <h2 className="m-5 text-brand">Your Bookings</h2>
                    <table className="table m-5">
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
            </div>
    );
};

export default BookingList;