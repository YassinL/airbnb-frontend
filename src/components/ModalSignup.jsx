import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import useSignUpForm from "./useSignupForm";

export default function ModaleSignup() {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="modal-button" type="button" onClick={handleOpen}>
        Inscription
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
      >
        <div className="modal-container">
          <h2 className="modal-container-header">Inscription</h2>
          <form
            className="modal-container-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              name="firstName"
              onChange={handleInputChange}
              value={inputs.firstName}
              type="text"
              placeholder="Prénom"
            />
            <input
              name="lastName"
              onChange={handleInputChange}
              value={inputs.lastName}
              type="text"
              placeholder="Nom"
            />
            <input
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              type="password"
              placeholder="Mot de passe"
            />
            <input
              name="city"
              onChange={handleInputChange}
              value={inputs.city}
              type="text"
              placeholder="Ville"
            />
            <input
              name="description"
              onChange={handleInputChange}
              value={inputs.descripton}
              type="text"
              placeholder="Description"
            />
            <input
              name="birthday"
              onChange={handleInputChange}
              value={inputs.birthday}
              type="date"
            />
            <input
              name="role"
              onChange={handleInputChange}
              value={inputs.role}
              type="text"
              placeholder="Role"
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
