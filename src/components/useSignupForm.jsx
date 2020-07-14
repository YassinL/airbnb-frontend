import { useState } from "react";
import axios from "axios";

export default function useSignupForm(callback) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    description: "",
    birthday: "",
    role: "",
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4000/api/signup`, inputs);
    message();
  };

  const message = () => {
    // eslint-disable-next-line no-alert
    alert("Tu es bien inscrit !");
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
}
