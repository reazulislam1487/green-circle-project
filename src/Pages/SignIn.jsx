import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import SoicalLogin from "../Components/SocialLogin";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Login successful",
          icon: "success",
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
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
    <div className="card my-20 bg-gradient-to-br from-green-200 via-green-400 to-green-600 max-w-sm  mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label text-black">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label text-black">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <Link to="forget" className="link link-hover">
              Forgot password?
            </Link>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <div className="mt-4 text-center ">
            <span>Don't Have an Account? </span>
            <Link to="/signUp" className="link link-hover text-red-500">
              Register
            </Link>
          </div>
        </form>
        <div>
          <SoicalLogin></SoicalLogin>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
