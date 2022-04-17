import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignOut = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signOutButton = () => {
    signOut(auth);
  };
  if (!user) {
    navigate("/login");
  }
  return (
    <div>
      <button
        onClick={signOutButton}
        className="text-white flex bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-lg 
              w-3/4  sm:w-auto md:px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700 mx-auto"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
