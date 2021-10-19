import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

import { useForm } from "react-hook-form";

import { useLocation, useHistory } from 'react-router-dom';

import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuth from '../../hooks/useAuth';



const Register = () => {


    // redirect initialize page 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';

    const { setError, error, auth } = useAuth()


    // registration form control functionality 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                setUserName(data.displayName);
                history.push(redirect_uri);
                setError("")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    };



    // user  name  update by registration form 
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    return (
        <div  className='my-5' style={{height:"450px"}}>
            <Container>
                <div >
                    <Row className="align-items-center">
                        <Col lg={6}  md={6}>
                            <div className="loginLeft">
                                <h3>Sign Up</h3>
                                
                                <p className="text-danger">or use your account</p>
                                <div className="form">

                                    <Form onSubmit={handleSubmit(onSubmit)}>

                                        <Form.Control  {...register("displayName", { required: true, maxLength: 20 })} type="text" placeholder="Enter name" />
                                        <p >{errors.displayName?.type === 'required' && "Name is required"}</p>



                                        <Form.Control {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} type="email" placeholder="Enter email" />
                                        <p >{errors.email && "Please Valid Email "}</p>

                                        <Form.Control  {...register("password", { required: true, maxLength: 20 })} type="password" placeholder="Enter password" />
                                        <p >{errors.password?.type === 'required' && "Password name is required"}</p>
                                        <p >{error}</p>
                                        <Button variant="primary" type="submit">
                                            Sign Up
                                        </Button>
                                    </Form>


                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} >
                            <div >
                                <div>
                                    <h2>Hello, Friend!</h2>
                                    <p>Enter your personal details and start journey with us</p>
                                    <NavLink to="/login">Sign IN </NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default Register;