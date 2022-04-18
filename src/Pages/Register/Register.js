import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import ContinueWithGGF from "../Shared/ContinueWithGGF/ContinueWithGGF";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";

const Register = () => {
  const [registeringEmail, setRegisteringEmail] = useState("");
  const [registeringPassword, setRegisteringPassword] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const registerEmail = useRef("");
  const registerPassword = useRef("");
  if (user) {
    console.log(user);
    navigate("/home");
  }
  if (error) {
    toast(error?.message);
  }

  if (loading) {
    <Loading></Loading>;
  }
  const registerFormSubmit = e => {
    e.preventDefault();
    const emailVerify = /\S+@\S+\.\S+/;
    const verifiedEmail = emailVerify.test(registerEmail.current.value);
    if (!verifiedEmail) {
      toast("Please provide valid email");
    } else {
      setRegisteringEmail(registerEmail.current.value);
    }
    const PasswordVerify =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const verifiedPassword = PasswordVerify.test(
      registerPassword.current.value
    );
    if (!verifiedPassword) {
      toast(
        "At least one upper case, At least one lower case, At least one digit, At least one special character, Minimum eight character"
      );
    } else {
      setRegisteringPassword(registerPassword.current.value);
    }
    createUserWithEmailAndPassword(registeringEmail, registeringPassword);

    // console.log(user);
  };
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="md:flex border-2 rounded-md w-fit m-auto mt-5 p-4">
        <div>
          <h2 className="text-4xl  text-white"> Register...</h2>
          <form onSubmit={registerFormSubmit} className="w-fit m-auto">
            <div className="my-3">
              <label
                className="block mb-2 text-left text-m font-medium
                text-white"
              >
                Email
              </label>
              <input
                ref={registerEmail}
                type="email"
                id="email"
                className="bg-blue-50 border border-blue-300 
                text-white text-md rounded-lg focus:ring-blue-200 
            focus:border-blue-200 block w-full p-2.5
             dark:bg-blue-300 dark:border-blue-300 
             dark:placeholder-blue-100  
             dark:focus:ring-blue-200 font-medium	
             dark:focus:border-blue-200"
                placeholder="Please type Email address"
                required="Please type Email address"
              />
              <h4 className="text-gray-200">
                We'll never share your email with anyone else.
              </h4>
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-m text-left font-medium 
                text-white"
              >
                Password
              </label>
              <input
                ref={registerPassword}
                type="password"
                id="password"
                className="bg-blue-50 border border-blue-300 
                text-white text-md rounded-lg focus:ring-blue-200 
            focus:border-blue-200 block w-full p-2.5
             dark:bg-blue-300 dark:border-blue-300 
             dark:placeholder-blue-100  
             dark:focus:ring-blue-200 font-medium	
             dark:focus:border-blue-200"
                placeholder="Please type Email password"
                required
              />
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-m text-left font-medium 
                text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="bg-blue-50 border border-blue-300 
             text-md rounded-lg focus:ring-blue-200
             focus:border-blue-200 block w-full p-2.5
             dark:bg-blue-300 dark:border-blue-300 
             dark:placeholder-blue-100 text-white
              dark:focus:ring-blue-200 font-medium	
             dark:focus:border-blue-200"
                placeholder="Please type Email password"
                required
              />
            </div>
            <div className="flex items-center mb-3">
              <div className="flex items-center mt-3 h-5">
                <input
                  onClick={() => setCheck(!check)}
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
                <label className="font-medium text-white">
                  Accept Physics Teacher Terms and Conditions
                </label>
              </div>
            </div>
            <div className="mx-auto">
              <button
                disabled={!check}
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md 
              w-3/4  sm:w-auto md:px-36 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
              >
                Submit
              </button>
            </div>
            <div className="my-2 text-white">
              Already have an account?
              <Link
                className="text-white ml-3 hover:text-green-900 hover:border-green-900 hover:text-md rounded-br-2xl border-b-2 pr-2 pb-1"
                to="/LogIn"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
        <div className="flex md:block justify-center items-center my-3">
          <hr className="h-1 md:h-1/2 md:w-1 w-1/2 md:ml-4 bg-amber-300 border-2 border-amber-400" />
          <h2 className="mx-2">OR</h2>
          <hr className="h-1 md:h-1/2 md:w-1 w-1/2 md:ml-4 bg-amber-300 border-2 border-amber-400" />
        </div>
        <ContinueWithGGF></ContinueWithGGF>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
