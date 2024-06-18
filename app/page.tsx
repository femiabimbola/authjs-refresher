"use client";

import GoogleSignIn from "@/components/auth/google-signin";
import {useAppDispatch} from "@/lib/redux/hooks";
import {onOpen as onLoginOpen} from "@/lib/redux/features/login-slice";

const Home = () => {
  const dispatch = useAppDispatch();

  const login = () => {
    return dispatch(onLoginOpen());
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p> Just the home page</p>
      {/* <GoogleSignIn /> */}

      <button onClick={login}> Random Button</button>
    </main>
  );
};

export default Home;
