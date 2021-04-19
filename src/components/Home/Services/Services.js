import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';

// const serviceData = [
//     {
//         title: 'Cinematography',
//         img: cinematography,
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!',
//         price: '5000'
//     },
//     {
//         title: 'Video Editing',
//         img: videoediting,
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!',
//         price: '2000'
//     },
//     {
//         title: 'Motion Graphics',
//         img: motiongraphics,
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!',
//         price: '4000'
//     },
// ];

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
        <section>
            <div className='text-center'>
                {/* <button onClick={handleAll}>add all</button> */}
                <h5 style={{ color: '#DC143C' }}>Our Services</h5>
                <h2 style={{ color: '#3a4256' }}>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75'>
                    {
                        services.map(serviceInfo => <ServiceDetail serviceInfo={serviceInfo}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;