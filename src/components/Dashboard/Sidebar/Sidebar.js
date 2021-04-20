import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUsers, faCalendar, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {

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
        <div className='row'>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <button className="btn btn-default text-white">Home</button>
                        </Link>
                    </li>
                    {isAdmin &&
                        <div>
                            <li>
                                <Link to="/orderList" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <button className="btn btn-default text-white">Order List</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addServices" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <button className="btn btn-default text-white">Add Service</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/makeAdmin" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <button className="btn btn-default text-white">Make Admin</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manageService" className="text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <button className="btn btn-default text-white">Manage Service</button>
                                </Link>
                            </li>
                        </div>
                    }
                    {
                        !isAdmin && <div>
                            <li>
                                <Link to="/bookNow" className="text-white">
                                    <FontAwesomeIcon icon={faCalendar} /> <button className="btn btn-default text-white">Book</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bookingList" className="text-white">
                                    <FontAwesomeIcon icon={faUsers} /> <button className="btn btn-default text-white">Booking List</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review" className="text-white">
                                    <FontAwesomeIcon icon={faFileAlt} /> <button className="btn btn-default text-white">Review</button>
                                </Link>
                            </li>
                        </div>
                    }
                </ul>
                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <button className="btn btn-warning text-brand">Logout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;