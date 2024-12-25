import React, { useEffect, useState } from "react";
import "./Modal.scss";
import CloseIcon from "../../assets/icons/close";

const CommonModal = ({
  open = true,
  children,
  onCloseModal,
  shouldCloseOnOverlayClick = false,
  shouldCloseOnEsc = false,
  hideCloseButton = false,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseModal) {
      onCloseModal(false); 
    }
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div className="container" style={{ display: isOpen ? "block" : "none" }}>
      <div
        className="gray"
        onClick={shouldCloseOnOverlayClick ? handleClose : undefined}
      ></div>
      <div className="modal">
        <div className="modal-container">
          {!hideCloseButton && (
            <button className="close-button" onClick={handleClose}>
              <CloseIcon />
            </button>
          )}
          <div className="modal-body">
          {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
