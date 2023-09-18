import React from 'react';
import googleLogo from "../../../images/social media/google logo.png"
import facebookLogo from "../../../images/social media/facebook.png"
import githubLogo from "../../../images/social media/github.jpg"
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
 
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

    const navigate = useNavigate();
    let errorElement;
     
    if(loading || loading1){

        return <Loading></Loading>
    }


    if (error || error1 || error2) {
      errorElement=
          <div>
            <p className='text-danger'>Error: {error?.message}{error1?.message} {error2?.message}</p>
          </div>
        ;
      }


      if (user || user1 || error2) {
       
        navigate("/home")
      }



    return (
        <div>
            <div className='d-flex align-items-center'>
                  <div style={{height: "1px"}} className='bg-primary w-50'></div>
                  <p className='mt-2 px-2'>or</p>
                  <div style={{height: "1px"}} className='bg-primary w-50'></div>
            </div>
            {errorElement}

            <div>
                
                   <button onClick={()=>signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                   <img style={{width: 30}} src={googleLogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                    </button>
                    <button onClick={()=>signInWithFacebook()} className='btn btn-info w-50 d-block mx-auto my-2'>
                   <img style={{width: 30}} src={facebookLogo} alt="" />
                    <span className='px-2'>FaceBook Sign In</span>
                    </button>
                    <button onClick={()=>signInWithGithub()} className='btn btn-info w-50 d-block mx-auto'>
                   <img style={{width: 30}} src={githubLogo} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;