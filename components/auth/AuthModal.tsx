"use client";
import {useCallback, useEffect, useState} from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void; // not temporary
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string; // not undefined
  actionColor?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const AuthModal = ({isOpen, disabled, onClose}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => setShowModal(isOpen), [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  if (!showModal) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6 overflow-x-hidden overflow-y-auto outline-none overlay focus:outline-none bg-black/50"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full mx-auto my-6 sm:w-[480px] lg:h-auto md:h-auto"
      >
        Just wanna check if you open
      </div>
    </div>
  );
};

export default AuthModal;
