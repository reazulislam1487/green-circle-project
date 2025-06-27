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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 mx-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">
          Create a new account
        </h1>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              {/* Name */}

              <label className="block text-green-900 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Name"
                required
              />
            </div>
            {/* Email */}
            <div className="flex-1">
              <label className="block text-green-900 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {/* Photo URL */}
            <div className="flex-1">
              <label className="block text-green-900 font-medium mb-1">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Photo URL"
                required
              />
            </div>
            {/* Password */}
            <div className="flex-1">
              <label className="block text-green-900 font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 text-green-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 cursor-pointer mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition duration-200"
          >
            Register
          </button>

          {/* Link to Login */}
          <div className="text-center text-sm text-green-800 mt-2">
            Already have an account?{" "}
            <Link
              to="/signIn"
              className="text-red-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <SoicalLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
