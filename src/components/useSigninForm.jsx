import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "./Context/Auth";

export default function useSigninForm() {
  const { dispatch } = useContext(AuthContext);
  const [connexion, setConnexion] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.persist();
    setConnexion((connexion) => ({
      ...connexion,
      [event.target.name]: event.target.value,
    }));
  };

  const message = () => {
    // eslint-disable-next-line no-alert
    alert("Tu es bien connecté !");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setConnexion({
      ...connexion,
    });
    const result = await axios.post(
      `http://localhost:4000/api/signin`,
      connexion
    );
    dispatch({ type: "SIGNIN", payload: result });
    console.log("result :", result.data);
    message();
  };

  return {
    handleSubmit,
    handleChange,
    connexion,
  };
}
