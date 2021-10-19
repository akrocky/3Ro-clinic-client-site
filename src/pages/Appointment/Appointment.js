import React from 'react';
import { Container } from 'react-bootstrap';

const Appointment = () => {
    return (
        <Container>
            <h1>Appointment</h1>
            <p>We are very pleased you want to make an appointment in the 3Ro Clinic. You can call us during office hours at 030 – 22 3331131 or by filling out the following contact form.</p>
            <small>3Ro Clinic</small>
            <p>jsd road,12333 Berlin</p>
            <div className='my-5'>
                <form action="">
                    <div >
                        <div className='d-bock my-2'>
                            <label htmlFor="">Your Name :</label> <br />
                    <input className=' w-25 p-1'  type="text" placeholder='write your name' /></div>
                        <div className='d-bock my-2'>
                            <label htmlFor="">Your Date of Birth :</label> <br />
                            
                    <input className=' w-25 p-1' type="date" name="" id="" /></div>
                        <div className='d-bock my-2'>
                            <label htmlFor="">Your Email:</label> <br />
                    <input className=' w-25 p-1' type="email" name="" id="" /></div>
                        <div className='d-bock my-2'>
                            <label htmlFor="">Appintment Date</label> <br />
                            
                    <input className=' w-25 p-1' type="text" placeholder=' ex. 22.12.2021' name="" id="" /></div>
                    <input type="submit" value="send" />
                    </div>
                    
                    
                    
                    
                </form>
            </div>

        </Container>
    );
};

export default Appointment;