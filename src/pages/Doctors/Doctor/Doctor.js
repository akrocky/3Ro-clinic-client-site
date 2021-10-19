import React from 'react';

const Doctor = (props) => {
    const {name,expert,image}=props.doctor
    return (
        <div className='col-3 my-5'>
            <img width="300px" height="300px" src={image} alt="" />
            <h4>{name}</h4>
            <p><small >{expert}</small></p>
        </div>
    );
};

export default Doctor;