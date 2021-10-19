import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Shared/Header/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Container className='my-5'>
               <h2>If you feel good you’ll get better faster!</h2>
               <p>Situated in the centre of Berlin, in the business centre Quartier 206 on strstrasse, 3Ro Clinic offers its patients the highest level of medical services combined with the comfort and atmosphere of a five star hotel. You can book an appointment with any of our specialists when it is convenient for you and within the shortest possible time. 9 doctors specializing in over 3 fields of medicine will be taking care of your health. Our specialists have access to the wide range of advanced diagnostic methods: modern x-ray equipment, CT and MRI, high resolution endoscopy and cardiac MRI.

</p>
           </Container>
          {/* experts */}
          <div className='my-3 d-flex justify-content-center '>
              <div>
              <h1 className='text-center'>Our Experts</h1>
              <div className='mt-5 mb-1'>
                  <img  width="300px " height="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnT52dIoVce5E5hC1SOqJf9NHNmz-0Xy9Adw&usqp=CAU" alt="" />
                  <img className='mx-5' width="300px" height="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtBJC3vtjrPHDF9NBZ7Or8qkaW-KNYerR-g&usqp=CAU" alt="" />
                  <img width="300px" height="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOCsf3rf7cjD_L3Z4SUoTAcsjqqWB82PYhQ&usqp=CAU" alt="" />
              </div>
              <button><Link style={{"textDecoration":"none","color":"black"}} to="/doctors">read more...</Link></button>
              </div>
          </div>
            

        </div>
    );
};

export default Home;