import React from 'react';
import { useParams } from 'react-router';
import UseServices from '../../../hooks/UseServices';
import Service from '../Service/Service';

const ServiceDetails = () => {
    const {serviceinfo}=useParams()
    const [services]=UseServices()
    // const seviceDetails =  services.find(service => service.id == serviceinfo)
    console.log(services);
    return (
        <div>
           <h2>{serviceinfo}</h2>
        </div>
    );
};

export default ServiceDetails;