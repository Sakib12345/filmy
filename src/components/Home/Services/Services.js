import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // const handleAll = () => {
        
    //     fetch('http://localhost:5000/addServices', {
    //         method:'POST',
    //         headers:{
    //             'Content-Type': 'application/json'
    //           },
    //         body: JSON.stringify(serviceData)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }

    return (
        <section className='w-75' style={{marginLeft:'13.5%'}}>
            <div className='text-center'>
                {/* <button onClick={handleAll}>add all</button> */}
                <h5 style={{ color: '#DC143C' }}>Our Services</h5>
                <h2 style={{ color: '#3a4256' }}>Services We Provide</h2>
            </div>
            
                <div className='row '>
                    {
                        services.map(serviceInfo => <ServiceDetail serviceInfo={serviceInfo}></ServiceDetail>)
                    }
                </div>
            
        </section>
    );
};

export default Services;