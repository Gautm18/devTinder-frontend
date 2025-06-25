import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <fieldset className="bg-base-300 border border-base-300 rounded-box p-6 w-80">
        <legend className="text-lg font-semibold mb-4"></legend>

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" className="input input-bordered w-full" placeholder="Email" />

        <label className="label mt-4">
          <span className="label-text">Password</span>
        </label>
        <input type="password" className="input input-bordered w-full" placeholder="Password" />

        <button className="btn btn-neutral mt-6 w-full">Login</button>
      </fieldset>
    </div>
  );
};

export default Login;
