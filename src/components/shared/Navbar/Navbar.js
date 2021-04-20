import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

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
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <Link to='/'>
                            <button style={{fontSize:'20px'}} className='btn btn-default text-white'><b>Home</b></button>
                        </Link>
                        {
                            isAdmin && <div>
                                
                                    <Link to='/orderList'>
                                        <button style={{fontSize:'20px', marginRight:'100px'}} className='btn btn-default text-white'><b>Admin</b></button>
                                    </Link>
                                
                            </div>
                        }
                        {
                            !isAdmin && <div>
                               
                                    <Link to='/orderList'>
                                        <button style={{fontSize:'20px'}} className='btn btn-default text-white'><b>Dashboard</b></button>
                                    </Link>
                               
                                    <Link to='/review'>
                                        <button style={{fontSize:'20px'}} className='btn btn-default text-white'><b>Review</b></button>
                                    </Link>
                                
                                    <Link to='/'>
                                        <button style={{fontSize:'20px' , marginRight:'100px'}}    className='btn btn-default text-white'><b>Contact Us</b></button>
                                    </Link>
                                
                            </div>
                        }




                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;