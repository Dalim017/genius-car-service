import React from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = event =>{
        navigate("/login")
    }

    const handleRegister = event =>{
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center', color:"blue"}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='Your Name'/>
                <br />
                <input type="email" name="email" id="" placeholder='Email address' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an Account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;