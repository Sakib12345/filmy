import React from 'react';

const OrderListAdminDetails = ({booking}) => {
    return (
        <tr className='p-5'>
            <td>{booking.title}</td>
            <td>{booking.name}</td>
        </tr>
    );
};

export default OrderListAdminDetails;