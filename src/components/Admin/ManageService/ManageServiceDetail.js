import React from 'react';
import { useHistory } from 'react-router';

const ManageServiceDetail = ({ service }) => {
    const history = useHistory();

    const handleDelete = (e) => {
        fetch(`http://localhost:5000/deleteService/${service._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json)
            .then(data => {
                alert('Service deleted successfully');
                history.replace('/manageService')
            })
    }


    return (
        <tr className='p-5'>
            <td>{service.title}</td>
            <td>{service.description}</td>
            <td>{service.price}</td>
            <td>
                <button className='btn-brand' onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default ManageServiceDetail;