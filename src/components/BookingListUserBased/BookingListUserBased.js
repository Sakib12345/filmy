import React from 'react';

const BookingListUserBased = (props) => {
    const {name,title} = props.booking;
    console.log(name)
    return (
        <tr>
            <td>{title}</td>
            <td>{name}</td>
        </tr>
    );
};

export default BookingListUserBased;