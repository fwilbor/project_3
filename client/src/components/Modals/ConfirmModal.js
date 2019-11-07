import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ConfirmModal = props => {
  const {
    title,
    message,
    input,
    btnText,
    cancel,
    handleInputChange,
    confirm
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <div>{message}</div>
          {input && (
            <div className="mt-3">
              <input
                type="password"
                className="form-control"
                placeholder="Guardian Password..."
                name="guardian"
                onChange={handleInputChange}
              />
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button className="btn-rose" onClick={confirm}>
            {btnText}
          </Button>
          <Button className="btn-gray" onClick={cancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
