import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Video Editing" , link: "/"},
        {name: "Photo Editing" , link: "/"},
        {name: "Cinematography" , link: "/"},
        {name: "Direction" , link: "/"},
        {name: "Script Writing" , link: "/"},
    ]
    const ourAddress = [
        {name: "Dhaka - 1205 Dhanmondi" , link: "//google.com/map"},
        {name: "Khulna - 1205 Rupsha" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Video Editing" , link: "/"},
        {name: "Photo Editing" , link: "/"},
        {name: "Cinematography" , link: "/"},
        {name: "Direction" , link: "/"},
        {name: "Script Writing" , link: "/"},
    ]
    const services = [
        {name: "Video Editing" , link: "/"},
        {name: "Photo Editing" , link: "/"},
        {name: "Cinematography" , link: "/"},
        {name: "Direction" , link: "/"},
        {name: "Script Writing" , link: "/"},
        {name: "Motion Graphics" , link: "/"},
        {name: "3D Animation" , link: "/"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Yearly Package Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Monthly Package Services" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebook} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+88093455423</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;