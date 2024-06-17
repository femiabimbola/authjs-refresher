import AuthModal from "./AuthModal";
import {useAppDispatch, useLoginModal} from "@/lib/redux/hooks";
import {onClose} from "@/lib/redux/features/login-slice";

const loginModal = () => {
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

export default loginModal;
