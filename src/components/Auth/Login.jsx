import React from "react";

const Login = () => {
  return (
    // Screen-centered container
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      {/* Card Container */}
      <div className="border-2 rounded-2xl border-emerald-600 p-8 sm:p-12 md:p-16 bg-white shadow-lg">
        <form className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Login</h2>

          {/* Email Input */}
          <input
            required
            type="email"
            placeholder="Enter your Email"
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 transition-all"
          />

          {/* Password Input */}
          <input
            required
            type="password"
            placeholder="Enter your password"
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 mt-3 transition-all"
          />

          {/* Submit Button */}
          <button className="w-full mt-5 text-white border-none outline-none bg-emerald-600 py-3 px-5 rounded-full text-xl font-semibold hover:bg-emerald-700 active:scale-95 transition-all">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
