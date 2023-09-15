import React, { useState, useRef } from "react";
import "../../app/modal.css"

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!modalRef.current || !event.target.closest(modalRef.current)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, [isOpen]);

    return (
        <>
        {isOpen && (
            <div className="modal" ref={modalRef}>
                <div className="modal-close" onClick={onClose}>
                ✕
                </div>
                <div className="modal-content">
                    {children}
                </div>

            </div>
        )}
        </>
    );
};

export default Modal;