import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "./Context/Auth";

export default function useSigninForm() {
  const [connexion, setConnexion] = useState({
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setConnexion((connexion) => ({
      ...connexion,
      [name]: value,
    }));
  };

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setConnexion({
        ...connexion,
        isSubmitting: true,
        errorMessage: null,
      });
      const result = await axios.post(
        `http://localhost:4000/api/signin`,
        connexion
      );
      if (result.status === 200) {
        console.log("je suis ici ", result.status);
        return dispatch({ type: "SIGNIN", payload: result });
      }
    } catch (error) {
      setConnexion({
        ...connexion,
        isSubmitting: false,
        errorMessage: error.message || error.statusText,
      });
    }
  };

  return {
    handleSubmit,
    handleChange,
    connexion,
  };
}
