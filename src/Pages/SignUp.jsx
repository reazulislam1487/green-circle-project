import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import SoicalLogin from "../Components/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, userUpdate, setUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const nagivate = useNavigate();

  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }
    setError("");
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        userUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              title: "Good job!",
              text: "Registration Successful",
              icon: "success",
              timer: 1500,
            });
            nagivate("/");
          })
          .catch(() => {});
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Registration Failed!",
          text: errorMessage || "An error occurred",
          icon: "error",
        });
      });
  };
  return (
    <div className="card  my-20 bg-gradient-to-br from-green-200 via-green-400 to-green-600  max-w-sm  mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label text-black">Name</label>
          <input
            type="Text"
            name="name"
            className="input"
            placeholder="Name"
            required
          />
          <label className="label text-black">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label text-black">Photo Url </label>
          <input
            type="url"
            name="photo"
            className="input"
            placeholder="Photo Url"
            required
          />
          <label className="label text-black"> Password </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            {error && <p className="text-error text-sm">{error}</p>}
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute top-3.5 right-6 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
          <div className="mt-4 text-center ">
            <span>Already have an account? </span>
            <Link to="/signIn" className="link link-hover text-red-500">
              Login
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

export default SignUp;
