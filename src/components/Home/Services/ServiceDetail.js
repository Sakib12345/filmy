import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({serviceInfo}) => {

    const handleClick = () =>{
        console.log('clicked')
    }

    return (
        <div className='col-md-4 text-center mt-5 mb-5 p-3'>
            <img style={{height: '150px'}} src={serviceInfo.img} alt="img"/>
            <h5 className='mt-3 mb-3'>{serviceInfo.title}</h5>
            <p className='text-secondary'>{serviceInfo.description}</p>
            <Link to='/bookNow'>
            <button onClick={handleClick} className='btn-brand'>Get Service</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;