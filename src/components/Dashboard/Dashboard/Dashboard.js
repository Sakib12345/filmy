import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';


const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100vh',
    width: '100%'
}

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [selectedDate, setSelectedDate] = useState(new Date())
    // const [appointments, setAppointments] = useState([])

    // const handleDateChange = (date) => {
    //     setSelectedDate(date)
    // }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentsByDate', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ date: selectedDate, email:loggedInUser.email })
    //     })
    //     .then(res => res.json())
    //     .then(data => setAppointments(data))
    // },[selectedDate, loggedInUser.email])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7">
                   <h1>dashboard</h1>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;