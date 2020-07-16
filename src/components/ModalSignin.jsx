import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import useSigninForm from "./useSigninForm";

export default function ModaleSignin() {
  const { connexion, handleChange, handleSubmit } = useSigninForm();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (
    connexion.email !== null &&
    connexion.password !== null &&
    !connexion.isSubmitting
  ) {
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
            <form className="modal-container-form" onSubmit={handleSubmit}>
              <input
                name="email"
                onChange={handleChange}
                value={connexion.email}
                type="email"
                placeholder="Email"
              />
              <input
                name="password"
                onChange={handleChange}
                value={connexion.password}
                type="password"
                placeholder="Mot de passe"
              />
              <button disabled={connexion.isSubmitting} type="submit">
                Envoyer
              </button>
            </form>
            <p className="modal-container-paragraphe">
              Nous vous appellerons ou vous enverrons un SMS pour confirmer
              votre numéro. Les frais standards d'envoi de messages et d'échange
              de données s'appliquent.
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}
