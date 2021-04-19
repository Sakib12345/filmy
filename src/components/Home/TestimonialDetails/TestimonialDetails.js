import React from 'react';
import './TestimonialDetails.css'

const TestimonialDetails = (props) => {
    const { name, companyName, description } = props.reviewInfo;
    return (
        <div className="col-md-4">
            <div className='d-flex justify-content-center'>
            <div className="card-body reviews-gap shadow">
                <h3 className="text-brand"><b>{name}</b></h3>
                <h5>{companyName}</h5>
                <p className="reviews-text text-secondary">{description}</p>
            </div>
            </div>
            
        </div>
    );
};

export default TestimonialDetails;