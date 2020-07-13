import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";

export default function ModaleSignup() {
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
        Connexion
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
      >
        <div className="modal-container">
          <h2 className="modal-container-header">Connexion</h2>
          <form className="modal-container-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mot de passe" />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
