import  { useEffect, useState } from 'react';

const UseDoctorsInfo = () => {
    const [doctors,setDoctors] =  useState([])
    useEffect(()=>{
       fetch('doctors.JSON')
       .then(res=>res.json())
       .then(data => setDoctors(data))
    },[])
    return [doctors,setDoctors];
};

export default UseDoctorsInfo;