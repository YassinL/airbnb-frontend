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
    await axios({
      method: "post",
      url: "http://localhost:4000/api/signup",
    });
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
}
