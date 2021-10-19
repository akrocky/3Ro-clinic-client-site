import React from 'react';
import { Container } from 'react-bootstrap';
import UseServices from '../../../hooks/UseServices';
import Service from '../Service/Service';

const Services = () => {
    const [Services]=UseServices()

    return (
        <div>
            <h1 className='text-center mt-5'>Our Services</h1>
<Container>
<div className='row'>
         {
          Services?.map(service=> <Service key={service.id} service={service}></Service>)   
         }
        
        </div>
</Container>
        </div>
        
    );
};

export default Services;