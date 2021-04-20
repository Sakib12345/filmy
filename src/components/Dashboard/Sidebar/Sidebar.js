import React, { useEffect, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUsers, faCalendar, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/Login/firebase.config';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const user = JSON.parse(localStorage.getItem('user')) || {};
    const [isAdmin, setIsAdmin] = useState(false);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userlog, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    })
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then((res) => {
                localStorage.clear();
                sessionStorage.clear()
                const signOutUser = {
                    userSignedIn: false,
                    name: '',
                    email: '',
                    error: '',
                    success: false
                }
                setUser(signOutUser)
                setLoggedInUser(signOutUser)
                // Sign-out successful.
            }).catch((error) => {
                console.log(error)
            })

    }

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
                     <FontAwesomeIcon icon={faSignOutAlt} /> <button onClick={handleSignOut} className="btn btn-warning text-black">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;