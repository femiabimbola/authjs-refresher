"use client";

import AuthModal from "./AuthModal";
import {useAppDispatch, useLoginModal} from "@/lib/redux/hooks";
import {onClose} from "@/lib/redux/features/login-slice";

const LoginModal = () => {
  const [isOpen, isLoading] = useLoginModal();
  const dispatch = useAppDispatch();

  return (
    <AuthModal
      onClose={() => dispatch(onClose())}
      isOpen={isOpen}
      // disabled={}
    />
  );
};

export default LoginModal;
