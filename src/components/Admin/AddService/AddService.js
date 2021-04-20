import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100vh',
        width: '100%'
    }

    const [addService, setAddService] = useState({});
    // const [file, setFile] = useState(null);

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    const handleOnBlur = (e) => {
        const newAddService = { ...addService };
        newAddService[e.target.name] = e.target.value;
        setAddService(newAddService);
    }
    const handleSubmit = (e) => {
        // const formData = new FormData();
        // formData.append('file', file)
        // formData.append('title', addService.title);
        // formData.append('price', addService.price);
        // formData.append('description', addService.description);
        e.preventDefault(); 
        fetch('http://localhost:5000/addService',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(addService)
        })
        .then(response => response.json)
        .then(data => {
            alert('Service added successfully')
            
        })
    }

    return (
        <section className='row' style={containerStyle}>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-5'>
                <form onSubmit={handleSubmit} className='m-5 p-5'>
                    <h1 className='text-brand'>Add New Service</h1>
                    <div className='form-group mt-5 mb-3'>
                        <label>Enter Title</label>
                        <input type="text" onBlur={handleOnBlur} placeholder="Enter Title" name='title' className="form-control" />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Enter Price</label>
                        <input type="text" onBlur={handleOnBlur} placeholder="Enter Price" name='price' className="form-control" />
                    </div>
                    <div class="form-group  mb-3">
                        <label >Description</label>
                        <textarea className="form-control"
                            onBlur={handleOnBlur} placeholder="Describe about the service" rows="5" name="description"></textarea>
                    </div>
                    <div className='form-group  mb-3'>
                        <input type="text" placeholder="Upload Image for this Service" name="img"
                            onBlur={handleOnBlur} className="form-control" />   
                    </div>
                    <div className='form-group'>
                        <button type="submit" className="btn-brand">Create Service</button>
                    </div>
                </form>
            </div>
        </section >
    );
};

export default AddService;