import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useState } from "react";

const SignUp = () => {

    const[success,setSuccess]=useState(false);
  const [errorMessage, setErrorMessage] = useState("");
 

  const handleSignUp = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    setSuccess(false);
    setErrorMessage("");


    // password valided

    const RegExpassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6}$/;

    const RegDigit=/(?=.*\d)/;
    const RegLowerCase=/(?=.*[a-z])/;
    const RegUpperCase=/(?=.*[A-Z])/;
    const RegLength = /^.{6}$/;

    // if(RegExpassword.test(password)==false){ setErrorMessage('please confirm your password one upper case one lower case one digit and length 6'); return; }


    // password validation one by one

    if(RegDigit.test(password)== false){
        setErrorMessage('confirmed at least one digit');
        return;
    }

    else if(RegLowerCase.test(password)==false){
        setErrorMessage('confirmed at least one lower case');
        return;
    }

    else if(RegUpperCase.test(password)==false){
        setErrorMessage('confirmed at least one upper case');
        return;
    }


    else if(RegLength.test(password)==false){
        setErrorMessage('Password must be exactly 6 characters long');
        return; }


    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message); // careful: "message", not "massage"
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>

            {/* Also fix: P --> p (lowercase!) */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>
            
            }

            {
                success && <p className="text-green-500">user created successfully</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
