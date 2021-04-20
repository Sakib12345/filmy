import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {

    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh',
        width: '100%'
    }

    const [adminMail, setAdminMail] = useState({})

    const handleSubmitMail = () => {
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminMail)
        })
            .then(res => res.json())
            .then(data => {
                alert('Admin Created Successfully');
            });
    }


    const handleOnBlur = (e) => {
        const newAdminMail = { ...adminMail };
        newAdminMail[e.target.name] = e.target.value;
        setAdminMail(newAdminMail);
    }

    return (
        <section className='row' style={containerStyle}>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-5'>
                <form onSubmit={handleSubmitMail} className='m-5 p-5'>
                    <div className='form-group mt-5 mb-3'>
                        <input type="email" onBlur={handleOnBlur} placeholder="Type Email" name='email' className="form-control" />
                    </div>
                    <div className='form-group'>
                        <button type="submit" className="btn-brand">Make Admin</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;