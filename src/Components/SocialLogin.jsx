import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const SoicalLogin = () => {
  const { user, signUpGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signUpGoogle()
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Login successful",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message || "An error occurred",
          icon: "error",
        });
      });
  };
  return (
    <div>
      {!user && (
        <div>
          <div className="space-y-3">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-secondary w-full"
            >
              <FcGoogle size={24}></FcGoogle> Login with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoicalLogin;
