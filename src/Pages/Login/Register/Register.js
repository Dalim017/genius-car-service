import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();
    const navigateLogin = event =>{
        navigate("/login")
    }
  


    if(loading){
        return <Loading></Loading>
    }


   if (user){
    console.log('user', user)
   }

    const handleRegister = async (event) =>{
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value; 
        // const agree = event.target.terms.checked;

        
         await createUserWithEmailAndPassword(email, password);
         const success = await updateProfile({ displayName: name });
          if (success) {
            console.log('Updated profile');
          navigate('/home')
          }

        
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
                
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="">Accept Terms and Conditions</label>

                
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-3' type="submit" value="Register" />
            </form>
            <p>Already Have an Account? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;