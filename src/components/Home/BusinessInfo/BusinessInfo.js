import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {   
        title: 'Opening Hour',
        icon: faClock,
        description: 'We are open 24/7',
        background: 'primary',
    },
    {   
        title: 'Visit Our Location',
        icon: faMapMarker,
        description: 'Dhaka - 1205 , Dhanmondi',
        background: 'dark',
    },
    {   
        title: 'Contact Us via phone',
        icon: faPhone,
        description: '01799432543',
        background: 'primary',
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData.map((info) => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;