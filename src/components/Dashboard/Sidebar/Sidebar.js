import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUsers, faCalendar, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className='row'>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <button className="btn btn-default text-white">Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <button className="btn btn-default text-white">Dashboard</button>
                        </Link>
                    </li>
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
                </ul>
                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <button className="btn btn-warning text-brand">Logout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;