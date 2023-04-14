import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGooglePlusG } from "react-icons/fa";
import auth from "../../../firebase.init";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../../features/auth/authSlice";

export default function GoogleLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [signInWithGoogle, user, loading, errorGoogle] =
    useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  console.log('user under google login', user)
  useEffect(() => {
    if (user) {
      console.log('line number 20',user)
      const email = user?.user?.email;
      const fullName = user?.user?.displayName;
      const providerId = "firebase";
      const profilePicture = user?.user?.photoURL;
      dispatch(googleLogin({ email, fullName, providerId, profilePicture }));
      router.push("/");
    }
  }, [user]);

  return (
    <button
      onClick={handleGoogleSignIn}
      style={{ backgroundColor: "#d34836" }}
      className="btn w-100 px-2 py-2 mt-3 text-white"
    >
      <FaGooglePlusG className="h4 mb-0" /> Google
    </button>
  );
}
