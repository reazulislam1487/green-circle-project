// import React, { use } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { Link, useLocation, useNavigate } from "react-router";
// import SoicalLogin from "../Components/SocialLogin";
// import Swal from "sweetalert2";

// const SignIn = () => {
//   const { signIn } = use(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const handleSignIn = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     signIn(email, password)
//       .then(() => {
//         Swal.fire({
//           title: "Good job!",
//           text: "Login successful",
//           icon: "success",
//           timer: 1500,
//         });
//         navigate(`${location.state ? location.state : "/"}`);
//       })
//       .catch((error) => {
//         Swal.fire({
//           title: "Login Failed!",
//           text: error.message || "An error occurred",
//           icon: "error",
//         });
//       });
//   };
//   return (
//     <div className="card my-20 bg-gradient-to-br from-green-200 via-green-400 to-green-600 max-w-sm  mx-auto shrink-0 shadow-2xl">
//       <div className="card-body">
//         <h1 className="text-5xl font-bold">Sign In</h1>
//         <form onSubmit={handleSignIn} className="fieldset">
//           <label className="label text-black">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="input"
//             placeholder="Email"
//           />
//           <label className="label text-black">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="input"
//             placeholder="Password"
//           />
//           <div>
//             <Link to="forget" className="link link-hover">
//               Forgot password?
//             </Link>
//           </div>
//           <button className="btn btn-neutral mt-4">Login</button>
//           <div className="mt-4 text-center ">
//             <span>Don't Have an Account? </span>
//             <Link to="/signUp" className="link link-hover text-red-500">
//               Register
//             </Link>
//           </div>
//         </form>
//         <div>
//           <SoicalLogin></SoicalLogin>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
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
    <div className=" min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-6">
          Login In
        </h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="forget"
              className="text-sm text-green-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
          >
            Login
          </button>

          {/* Register Redirect */}
          <div className="text-center text-sm mt-4 text-green-800">
            Don't have an account?{" "}
            <Link
              to="/signUp"
              className="text-red-500 font-medium hover:underline"
            >
              Register
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

export default SignIn;
