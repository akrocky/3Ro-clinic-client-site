import React from 'react';
import UseServices from '../../../hooks/UseServices';
import Service from '../Service/Service';

const Services = () => {
    const [Services]=UseServices()

    return (
        <div>
            <h1 className='text-center mt-5'>Our Services</h1>
<div className='d-flex justify-content-center'>
         {
          Services?.map(service=> <Service key={service.id} service={service}></Service>)   
         }
        
        </div>
        </div>
        
    );
};

export default Services;