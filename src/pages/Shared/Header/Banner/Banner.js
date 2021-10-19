import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const linkStyle= {textDecoration:"none",color:"black"}
    
    return (
       

    <div className='banner'>
        <div className='banner-text'>
            <h1>Welcome to  3RO Clinic</h1>
            <h3>Situated in the centre of Berlin</h3>
            <div className='mt-5'>
                <button className='me-5'> <Link style={linkStyle} to="aboutus">Read More</Link></button>
                <button><Link style={linkStyle} to="appointment"> Appointment</Link></button>
            </div>

        </div>
    </div>

    );
};

export default Banner;