import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ManageServiceDetail from './ManageServiceDetail';

const ManageService = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh',
        width: '100%'
    }
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <section className='row' style={containerStyle}>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-5'>
                <h2 className="m-5 text-brand">Manage Services</h2>
                <table className="table m-5 ">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete Service</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service => <ManageServiceDetail key='' service={service}></ManageServiceDetail>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageService;