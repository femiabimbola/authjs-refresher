"use client";
import {useCallback, useEffect, useState} from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  actionColor?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const AuthModal = ({isOpen}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => setShowModal(isOpen), [isOpen]);
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6 overflow-x-hidden overflow-y-auto outline-none overlay focus:outline-none bg-black/50"
      // onClick={handleClose}
    >
      <div></div>
    </div>
  );
};

export default AuthModal;