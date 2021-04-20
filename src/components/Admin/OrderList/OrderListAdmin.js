import {React ,useEffect, useState} from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderListAdminDetails from './OrderListAdminDetails';


const OrderListAdmin = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orderList')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);


    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh',
        width: '100%'
    }
    return (
        <section className='row' style={containerStyle}>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-5'>
                <h2 className="m-5 text-brand">Manage Services</h2>
                <table className="table m-5 ">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <OrderListAdminDetails key='' booking={booking}></OrderListAdminDetails>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OrderListAdmin;