import { Modal } from "flowbite-react";
import { useState, useEffect } from "react";

function MemberWelcomeModal({ clearSuccessModal }) {
  const [openModal, setOpenModal] = useState("dismissible");

  const clearModal = ({ username }) => {
    clearSuccessModal();
    setOpenModal(undefined);
  };

  useEffect(() => {
    setTimeout(() => {
      clearModal();
    }, 2000);
  }, []);

  return (
    <>
      <Modal
        dismissible
        className="event-modal"
        show={openModal}
        onClose={() => clearModal()}
      >
        <Modal.Body className="text-black">
          <div>{`Welcome back ${username}!`}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MemberWelcomeModal;
