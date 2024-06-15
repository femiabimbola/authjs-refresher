import AuthModal from "./AuthModal";
import {useAppDispatch} from "@/lib/redux/hooks";

const loginModal = () => {
  const [isOpen, isLoading] = useLoginModal();
  const dispatch = useAppDispatch();

  return (
    <AuthModal
      onClose={() => dispatch(onLoginModalClose())}
      isOpen={isOpen}
      // disabled={}
    />
  );
};
