import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const ServiceDetail = ({ serviceInfo }) => {

    return (
        <div className='col-md-4'>
            <div className='d-flex justify-content-center'>
                <div className='text-center mt-5 mb-5 p-3'>
                    <img style={{ height: '150px' }} src={serviceInfo.img} alt="img" />
                    <h5 className='text-brand mt-3 mb-3'>{serviceInfo.title}</h5>
                    <p className='text-secondary'>{serviceInfo.description}</p>
                    <h5 className='text-brand mb-3'>Price: {serviceInfo.price} BDT</h5>
                    <Link to={`/bookNow/${serviceInfo._id}`}>
                        <button className='btn-brand'>Get Service</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;