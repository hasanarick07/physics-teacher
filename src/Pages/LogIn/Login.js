import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googleIcon from "../../images/Google-icon.png";

const Login = () => {
  const navigate = useNavigate();
  const logEmail = useRef("");
  const logPassword = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const logFormSubmit = e => {
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(result => {
    //     const user = result.user;
    //     console.log(user);
    //   })
    //   .catch(error => {
    //     console.error();
    //   });
    e.preventDefault();
    const loginEmail = logEmail.current.value;
    const loginPassword = logPassword.current.value;
    signInWithEmailAndPassword(loginEmail, loginPassword);
    console.log(loginEmail, loginPassword);
  };
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <div className="block md:flex border-2 rounded-md w-fit m-auto mt-5 p-4">
        <div>
          <h1 className="text-4xl  text-gray-800"> Log In...</h1>
          <form onSubmit={logFormSubmit} className="w-fit m-auto">
            <div className="my-3">
              <label className="block mb-2 text-left text-m font-medium text-gray-900 dark:text-gray-800">
                Email
              </label>
              <input
                ref={logEmail}
                type="email"
                id="email"
                className="bg-blue-50 border border-blue-300 
              text-gray-900 text-md rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5
               dark:bg-blue-300 dark:border-blue-300 dark:placeholder-blue-100 dark:text-black dark:focus:ring-blue-200 font-medium	
               dark:focus:border-blue-200"
                placeholder="Please type Email address"
                required="Please type Email address"
              />
              <p className="text-gray-200">
                We'll never share your email with anyone else.
              </p>
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-m text-left font-medium text-gray-900 dark:text-gray-800">
                Password
              </label>
              <input
                ref={logPassword}
                type="password"
                id="password"
                className="bg-blue-50 border border-blue-300 
              text-gray-900 text-md rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5 font-medium	
               dark:bg-blue-300 dark:border-blue-300 dark:placeholder-blue-100 dark:text-black dark:focus:ring-blue-200 
               dark:focus:border-blue-200"
                placeholder="Please type Email password"
                required
              />
            </div>
            <div className="flex items-start mb-3">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-900 dark:text-gray-800">
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md 
            w-3/4  sm:w-auto md:px-36 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
            >
              Log In
            </button>
            <div className="my-2 te">
              New to Physics Teacher?
              <Link className="text-white ml-3  hover:text-lg" to="/Register">
                Register
              </Link>
            </div>
          </form>
        </div>
        <div className="flex md:block	 md:justify-center items-center my-3">
          <hr className="h-1 md:h-1/2 w-1/2 md:w-1 md:ml-4 bg-amber-300 border-2 border-amber-400" />
          <h1 className="mx-2">OR</h1>
          <hr className="h-1 md:h-1/2 w-1/2 md:w-1 md:ml-4 bg-amber-300 border-2 border-amber-400" />
        </div>
        <div className="md:mt-10" onClick={googleSignIn}>
          <button
            className="text-white flex bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-lg 
              w-3/4  sm:w-auto md:px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700 mx-auto"
          >
            <img className="w-6 mx-3 " src={googleIcon} alt="" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
