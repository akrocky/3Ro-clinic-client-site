import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Service = (props) => {
    const {id,icon,title}=props.service
    const history =useHistory()
    const handleLink=()=>{
        history.push(`/services/${id}`)
    }
    return (
        <div className='m-5 col-lg-3'>
          
          <img height="250px" width="250px" className='img-fliud' src={icon} alt="" />
          <h3 className='text-center'>{title}</h3>

         <div className='ms-5'><button className='ms-5' onClick={handleLink}>see more...</button>
          </div>

        </div>
    );
};

export default Service;