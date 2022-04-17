import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import ContinueWithGGF from "../Shared/ContinueWithGGF/ContinueWithGGF";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const registerEmail = useRef("");
  const registerPassword = useRef("");
  if (user) {
    navigate("/home");
  }
  const regiFormSubmit = e => {
    // .then(result => {
    //   const user = result.user;
    //   console.log(user);
    // })
    // .catch(error => {
    //   console.error();
    // });
    e.preventDefault();
    const emailR = registerEmail.current.value;
    const passwordR = registerPassword.current.value;
    createUserWithEmailAndPassword(emailR, passwordR);
    console.log(emailR, passwordR);
  };
  return (
    <div>
      <div className="md:flex border-2 rounded-md w-fit m-auto mt-5 p-4">
        <div>
          <h1 className="text-4xl  text-gray-800"> Register...</h1>
          <form onSubmit={regiFormSubmit} className="w-fit m-auto">
            <div className="my-3">
              <label
                className="block mb-2 text-left text-m font-medium
             text-gray-900 dark:text-gray-800"
              >
                Email
              </label>
              <input
                ref={registerEmail}
                type="email"
                id="email"
                className="bg-blue-50 border border-blue-300 
            text-gray-900 text-md rounded-lg focus:ring-blue-200 
            focus:border-blue-200 block w-full p-2.5
             dark:bg-blue-300 dark:border-blue-300 
             dark:placeholder-blue-100 dark:text-black 
             dark:focus:ring-blue-200 font-medium	
             dark:focus:border-blue-200"
                placeholder="Please type Email address"
                required="Please type Email address"
              />
              <p className="text-gray-200">
                We'll never share your email with anyone else.
              </p>
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-m text-left font-medium 
            text-gray-900 dark:text-gray-800"
              >
                Password
              </label>
              <input
                ref={registerPassword}
                type="password"
                id="password"
                className="bg-blue-50 border border-blue-300 
            text-gray-900 text-md rounded-lg focus:ring-blue-200 
            focus:border-blue-200 block w-full p-2.5
             dark:bg-blue-300 dark:border-blue-300 
             dark:placeholder-blue-100 dark:text-black 
             dark:focus:ring-blue-200 font-medium	
             dark:focus:border-blue-200"
                placeholder="Please type Email password"
                required
              />
            </div>
            <div className="mb-3">
              <label
                className="block mb-2 text-m text-left font-medium 
            text-gray-900 dark:text-gray-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="bg-blue-50 border border-blue-300 
            text-gray-900 text-md rounded-lg focus:ring-blue-200
             focus:border-blue-200 block w-full p-2.5
             dark:bg-blue-300 dark:border-blue-300 
             dark:placeholder-blue-100 dark:text-black
              dark:focus:ring-blue-200 font-medium	
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
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300
                 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 
                 dark:border-gray-600 dark:focus:ring-blue-600 
                 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-900 dark:text-gray-700">
                  Remember me
                </label>
              </div>
            </div>
            <div className="mx-auto">
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md 
              w-3/4  sm:w-auto md:px-36 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
              >
                Submit
              </button>
            </div>
            <div className="my-2 te">
              Already have an account?
              <Link className="text-gray-200 ml-3 hover:text-md" to="/LogIn">
                Log in
              </Link>
            </div>
          </form>
        </div>
        <div className="flex md:block justify-center items-center my-3">
          <hr className="h-1 md:h-1/2 md:w-1 w-1/2 md:ml-4 bg-amber-300 border-2 border-amber-400" />
          <h1 className="mx-2">OR</h1>
          <hr className="h-1 md:h-1/2 md:w-1 w-1/2 md:ml-4 bg-amber-300 border-2 border-amber-400" />
        </div>
        <ContinueWithGGF></ContinueWithGGF>
      </div>
    </div>
  );
};

export default Register;
