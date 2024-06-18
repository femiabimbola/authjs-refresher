"use client";

import AuthModal from "./AuthModal";
import {useAppDispatch, useLoginModal} from "@/lib/redux/hooks";
import {onClose as onLoginClose} from "@/lib/redux/features/login-slice";

const LoginModal = () => {
  const [isOpen, isLoading] = useLoginModal();
  const dispatch = useAppDispatch();

  // This component is called on load, but onClose props closes it
  return (
    <>
      <AuthModal
        onClose={() => dispatch(onLoginClose())}
        isOpen={isOpen}
        // disabled={}
      />
    </>
  );
};

export default LoginModal;
