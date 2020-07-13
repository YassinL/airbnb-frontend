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
          <form className="modal-container-form">
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Nom" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mot de passe" />
            <input type="text" placeholder="Ville" />
            <input type="text" placeholder="Description" />
            <input type="date" />
            <input type="text" placeholder="Role" />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
