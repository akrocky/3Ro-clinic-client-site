import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='my-5'>
           <img width="100%" height="60%" src="https://www.qualitaetskliniken.de/reha/img/clinics/medical-park-humboldtmuehle-druck-mp-mpb-0815-tp-rezeption-und-aufenthaltsbereich-4092-30955ef9f360da590-xl.jpg" alt="" />
       
       <Container>
       <h1 className='text-center bolder border border-secondary my-5'>3RO Clinic</h1>
        <p>Our patients are welcomed in an ambiance that is otherwise found only in top-ranking luxury hotels. The rooms offer wonderful views of the Gendarmenmarkt Square, the Reichstag, Friedrichstrasse, or the quiet and peaceful atrium. The interior design is based on the harmonious interplay of understated beiges and browns for the walls, and soothingly warm wood hues. All medical necessities are discreetly integrated in the interior. The luxurious ambiance, the soothing colour concept, and the state of the art technical equipment of our rooms all follow one central idea: to promote the emotional well-being of our patients in order to guarantee fast recuperation.

        </p>
        <button className='ms-3'><Link style={{textDecoration:"none",color:"black"}} to="aboutus">Contact us</Link></button>
       </Container>
        </div>
    );
};

export default AboutUs;