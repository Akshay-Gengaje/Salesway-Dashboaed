import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          identifier: username,
          password,
        }
      );
      console.log(res);
      if (res.status !== 201) {
        setLoading(false);
        setError(res.data.error);
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: "LOGIN", payload: res.data });
        setLoading(false);
      }
    } catch (err) {
      setError(err.response.data.error);
      setLoading(false);
    }
  };

  return { login, isLoading, error };
};
