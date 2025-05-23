import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';

const Login = () => {


    const [errorMessage,setErrorMessage]=useState("")

    const [success,setSuccess]=useState(false);
    const emailRef=useRef();

    const handleLogin=e=>{
        e.preventDefault();
        const target=e.target;
        const email=target.email.value;
        const password=target.password.value;
        console.log(email, password)
        setErrorMessage('');
        setSuccess(false);

        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result);
            if(!result.user.emailVerified){
                alert('please emailVerified');
                
            }
            else{
                setSuccess(true);

            }
        })

        .catch(error =>{
            console.log(error)
            setErrorMessage("please enter valided password");
        })

    }

    const handleForgetpassword=()=>{
        console.log(emailRef.current.value);
        const email=emailRef.current.value;
        setErrorMessage("");
        sendPasswordResetEmail(auth,email)
        .then(result =>{
            alert('please check your email and reset password');
            console.log(result)
        })
        .catch(error =>{
            setErrorMessage(error.message)
        })

    }
    return (
        
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' ref={emailRef} type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div onClick={handleForgetpassword}><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>

        <p>New User ? <Link to='/signup'  className='text-blue-600'>plese Sign Up</Link></p>
      </div>

      {
        errorMessage && <p className='text-red-600'>{errorMessage}</p>
      }

      {
        success && <p className='text-green-500'>user login successfully</p>
      }
    </div>
  
    );
};

export default Login;