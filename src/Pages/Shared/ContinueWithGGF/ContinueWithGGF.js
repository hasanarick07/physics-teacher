import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import auth from "../../../firebase.init";
import googleIcon from "../../../images/Google-icon.png";

const ContinueWithGGF = () => {
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider);
  };
  return (
    <div>
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
  );
};

export default ContinueWithGGF;
