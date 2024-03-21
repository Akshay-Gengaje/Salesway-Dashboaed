import { useState } from "react";
import { TbWindmillFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();
  const handleSubmit = async () => {
    await signup(username, email, password);
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="flex justify-center items-center gap-2 font-bold text-center text-2xl mb-5">
          <TbWindmillFilled /> Salesway
        </h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Username
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Email Address
            </label>
            <input
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              disabled={isLoading}
              className="disabled:bg-gray-400 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              onClick={handleSubmit}
            >
              <span className="inline-block mr-2">Sign Up</span>
            </button>
            {error && <div className="mt-2 text-red-500">{error}</div>}
            <NavLink to="/login">
              <p className="text-center mt-2 text-blue-700 hover:text-purple-400">
                Already have account?
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
