import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "./store";
import {useMemo} from "react";

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useRegisterModal = () => {
  // use may use (store) = store.registerModal
  const isOpen = useAppSelector((state) => state.registerModal.isOpen);
  const isLoading = useAppSelector((state) => state.registerModal.isLoading);
  return useMemo(() => [isOpen, isLoading] as const, [isOpen, isLoading]);
};

export const useLoginModal = () => {
  const isOpen = useAppSelector((state) => state.loginModal.isOpen);
  const isLoading = useAppSelector((state) => state.loginModal.isLoading);
  return useMemo(() => [isOpen, isLoading] as const, [isOpen, isLoading]);
};
