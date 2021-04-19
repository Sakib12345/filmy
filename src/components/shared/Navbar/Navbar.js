import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <Link to='/'>
                            <button className='btn btn-default text-white'>Home</button>
                        </Link> 
                        <Link to='/dashboard'>
                            <button className='btn btn-default text-white'>Dashboard</button>
                        </Link> 
                        <Link to='/review'>
                            <button className='btn btn-default text-white'>Review</button>
                        </Link> 
                        
                        <Link to='/'>
                            <button className='btn btn-default text-white'>Contact Us</button>
                        </Link> 
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;