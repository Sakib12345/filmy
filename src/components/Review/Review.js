import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Review = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh',
        width: '100%'
    }
    const [review, setBooking] = useState({});

    const handleOnBlur = (e) => {
        const newReview = review;
        newReview[e.target.name] = e.target.value;
        setBooking(newReview);
    }

    const handleSubmitReview = () => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json)
            .then(data => {
                alert('Review Added Successfully');
                // history.replace('/bookingList')
            })
    }

    return (
        <div style={containerStyle} className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 m-5">
                <form className="mt-5" onSubmit={handleSubmitReview}>
                    <div className="form-group">
                        <label >Your Name</label>
                        <input type="text" onBlur={handleOnBlur} className="form-control" name='name' placeholder="Your Name" />
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputEmail1">Company Name</label>
                        <input name='companyName' onBlur={handleOnBlur} type="text" className="form-control" placeholder="Company Name" />
                    </div>
                    <div className="form-group mt-3">
                        <label >Description</label>
                        <textarea name='description' placeholder='Provide your review here' onBlur={handleOnBlur} class="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <button type="submit" className="mt-3 btn-brand">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default Review;