import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import ContinueWithGGF from "../Shared/ContinueWithGGF/ContinueWithGGF";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const logEmail = useRef("");
  const logPassword = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    <Loading></Loading>;
  }
  const loginFormSubmit = e => {
    e.preventDefault();
    const emailVerify = /\S+@\S+\.\S+/;
    const verifiedEmail = emailVerify.test(logEmail.current.value);
    if (!verifiedEmail) {
      toast("Please provide valid email");
    } else {
      setLoginEmail(logEmail.current.value);
    }
    const PasswordVerify =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const verifiedPassword = PasswordVerify.test(logPassword.current.value);
    if (!verifiedPassword) {
      toast(
        "At least one upper case, At least one lower case, At least one digit, At least one special character, Minimum eight character"
      );
    } else {
      setLoginPassword(logPassword.current.value);
    }
    signInWithEmailAndPassword(loginEmail, loginPassword);
  };

  if (error || resetError) {
    toast(error?.message);
  }
  const emailReset = async () => {
    if (loginEmail) {
      await sendPasswordResetEmail(loginEmail);
      toast("Reset Password Email Sent");
    } else {
      toast("Please Enter Your Email Address");
    }
  };
  return (
    <div>
      <div className="block md:flex border-2 rounded-md w-fit m-auto text-white p-4">
        <div className="md:p-7">
          <h2 className="text-4xl  text-white"> Log In...</h2>
          <form onSubmit={loginFormSubmit} className="w-fit m-auto">
            <div className="my-3">
              <label className="block mb-2 text-left text-m font-medium text-white">
                Email
              </label>
              <input
                ref={logEmail}
                type="email"
                id="email"
                className="bg-blue-50 border border-blue-300 
                text-white text-md rounded-lg focus:ring-blue-200 
                focus:border-blue-200 block w-full p-2.5 dark:bg-blue-300
                 dark:border-blue-300 dark:placeholder-blue-100 
                 dark:focus:ring-blue-200 font-medium dark:focus:border-blue-200"
                placeholder="Please type Email address"
                required="Please type Email address"
              />
              <h4 className="text-gray-200">
                We'll never share your email with anyone else.
              </h4>
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-m text-left font-medium text-white ">
                Password
              </label>
              <input
                ref={logPassword}
                type="password"
                id="password"
                className="bg-blue-50 border border-blue-300 
                text-white text-md rounded-lg focus:ring-blue-200
                 focus:border-blue-200 block w-full p-2.5 font-medium	
               dark:bg-blue-300 dark:border-blue-300 dark:placeholder-blue-100 dark:focus:ring-blue-200 
               dark:focus:border-blue-200"
                placeholder="Please type Email password"
                required
              />
            </div>
            <div className="flex items-center mb-3">
              <div className="flex items-center mt-3 h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300
                   focus:ring-3 focus:ring-blue-300 dark:bg-gray-700
                    dark:border-gray-600 dark:focus:ring-blue-600 
                    dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-white">Remember me</label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md 
            w-3/4  sm:w-auto md:px-36 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
            >
              Log In
            </button>
            <div className="mt-2">
              New to Physics Teacher?
              <Link
                className="text-white ml-3 hover:text-green-900
                 hover:border-green-900 hover:text-md rounded-br-2xl
                  border-b-2 pr-2 pb-1"
                to="/register"
              >
                Register
              </Link>
            </div>
            <div
              onClick={emailReset}
              className="mt-3 mr-auto inline-block text-left text-white  hover:text-green-900
                 hover:border-green-900 hover:text-md rounded-br-2xl
                  border-b-2 pr-2 pb-1"
            >
              Forget Password?
            </div>
          </form>
        </div>
        <div className="flex md:block	 md:justify-center items-center my-3">
          <hr className="h-1 md:h-1/2 w-1/2 md:w-1 md:ml-4 bg-amber-300 border-2 border-amber-400" />
          <h2 className="mx-2">OR</h2>
          <hr className="h-1 md:h-1/2 w-1/2 md:w-1 md:ml-4 bg-amber-300 border-2 border-amber-400" />
        </div>
        <ContinueWithGGF></ContinueWithGGF>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
