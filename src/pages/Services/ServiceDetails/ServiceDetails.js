import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseServices from '../../../hooks/UseServices';
import Service from '../Service/Service';

const ServiceDetails = () => {
    const {id}=useParams()
    const [servicesi,setServicesi]=useState([])
  useEffect(()=>{
      fetch('https://raw.githubusercontent.com/akrocky/review-website-akrocky-Api/main/services.JSON')
      .then(res=>res.json())
      .then(data=>setServicesi(data))
  },[])
      const servicesinfo =  servicesi?.find(service => service.id == id)
      console.log(servicesinfo);

    
    return (
        <div className='m-5 d-flex align-items-center' style={{height:"450px"}}>
          <div>
          <h2 className='text-center mb-5'>{servicesinfo?.title2}</h2>
           <p className='mx-5'>{servicesinfo?.info}</p>
          </div>
        </div>
    );
};

export default ServiceDetails;