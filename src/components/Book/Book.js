import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Book = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh',
        width: '100%'
    }

    const { id } = useParams();
    // const history = useHistory();

    const [service, setService] = useState({});
    const [booking, setBooking] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(response => response.json())
            .then(result => {
                setService(result)
                const newBooking = booking;
                newBooking.title = result.title;
                setBooking(newBooking)
            })
    }, [booking,id]);


    const handleSubmitBooking = () => {
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(response => response.json)
            .then(data => {
                alert('Service Purchased Successfully');
                // history.replace('/bookingList')
            })
    }
    const handleOnBlur = (e) => {
        const newBooking = booking;
        newBooking[e.target.name] = e.target.value;
        setBooking(newBooking);
    }

    return (
        <div style={containerStyle} className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 m-5">
                <form className="mt-5" onSubmit={handleSubmitBooking}>
                    <div className="form-group">
                        <label >Your Name</label>
                        <input type="text" onBlur={handleOnBlur} className="form-control" name='name' placeholder="Your Name" />
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input name='email' onBlur={handleOnBlur} type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-group mt-3">
                        <label >Service that you want to buy and it's price</label>
                        <span className=' text-brand'> {service.price} BDT</span>
                        <input name='title' type="text" className="form-control" value={service.title} />
                    </div>

                    <button type="submit" className="mt-3 btn-brand">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Book;