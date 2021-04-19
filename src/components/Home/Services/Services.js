import React from 'react';
import cinematography from '../../../images/cinematography.png';
import videoediting from '../../../images/videoediting.png';
import motiongraphics from '../../../images/motiongraphics.png';
import ServiceDetail from './ServiceDetail';

const serviceData = [
    {
        title:'Cinematography',
        img:cinematography,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!'
    },
    {
        title:'Video Editing',
        img:videoediting,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!'
    },
    {
        title:'Motion Graphics',
        img:motiongraphics,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!'
    }
]

const Services = () => {
    return (
        <section>
            <div className='text-center'>
            <h5 style={{color:'#DC143C'}}>Our Services</h5>
            <h2 style={{color:'#3a4256'}}>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75'>
                    {
                        serviceData.map(serviceInfo => <ServiceDetail serviceInfo={serviceInfo}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;