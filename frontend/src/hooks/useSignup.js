import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    try {
      setError(null);
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
        {
          username,
          email,
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

  return { signup, isLoading, error };
};
