import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const ServiceDetail = (props) => {
    const {_id,img, price, description, title} = props.serviceInfo
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className='col-md-4'>
            <div className='d-flex justify-content-center'>
                <div className='text-center mt-5 mb-5 p-3'>
                    <img style={{ height: '150px' }} src={img} alt="img" />
                    <h5 className='text-brand mt-3 mb-3'>{title}</h5>
                    <p className='text-secondary'>{description}</p>
                    
                    {
                        !isAdmin && <div>
                            <h5 className='text-brand mb-3'>Price: {price} BDT</h5>
                            <Link to={`/bookNow/${_id}`}>
                                <button className='btn-brand'>Get Service</button>
                            </Link>
                        </div>
                    }
                    {
                        isAdmin && <div>
                            <Link to={`/manageService`}>
                                <button className='btn-brand'>Manage Service</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;