import { TbWindmillFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const handleLogin = () => {
    login(username, password);
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
              onClick={handleLogin}
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
            </button>
            {error && <div className="mt-2 text-red-500">{error}</div>}
            <NavLink to="/signup">
              <p className="text-center mt-2 text-blue-700 hover:text-purple-400">
                Need account?
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
