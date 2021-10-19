import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';

import { useForm } from "react-hook-form";

// redirect to initialize page 
import { useLocation, useHistory } from 'react-router-dom';



import {  signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { setUser, setError, error, auth, signInUsingGoogle } = useAuth();

    // redirect to initialize page  start 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    // redirect to initialize page  end  



    // login  user  functionality start 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                setUser(result.user)
                history.push(redirect_uri);
                setError("")
            })
            .catch((error) => {
                setError(error.message)
            });
    };
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{
history.push(redirect_uri)
        })

    }


    // login  user  functionality start 

    return (
        <div className='my-5' style={{height:"450px"}} >
            <Container>
                <div >
                    <Row className="align-items-center">
                        <Col lg={6}  md={6}>
                            <div className="loginLeft">
                                <h3>Sign in with</h3>
                                <button onClick={handleGoogleLogin}>Google</button>
                                
                                <p className="text-danger">or use your account</p>
                                <div className="form">
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Form.Control {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} type="email" placeholder="Enter email" />
                                        <p >{errors.email && "Please Valid Email "}</p>

                                        <Form.Control  {...register("password", { required: true, maxLength: 20 })} type="password" placeholder="Enter password" />
                                        <p >{errors.password?.type === 'required' && "Password name is required"}</p>
                                        <p >{error}</p>

                                        <Button variant="primary" type="submit">
                                            Sign In
                                        </Button>
                                    </Form>

                                </div>
                            </div>
                        </Col>
                        <Col lg={6}  md={6} >
                            <div>
                                <div>
                                    <h2>Hello, Friend!</h2>
                                    <p>Enter your personal details and start journey with us</p>
                                    <NavLink to="/register">Sign Up </NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>


    );
};

export default Login;