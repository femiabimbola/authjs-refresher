"use client";

import GoogleSignIn from "@/components/auth/google-signin";
import {useAppDispatch} from "@/lib/redux/hooks";
import {onOpen as onLoginOpen} from "@/lib/redux/features/login-slice";
import Link from "next/link";

const Home = () => {
  const dispatch = useAppDispatch();

  const login = () => {
    return dispatch(onLoginOpen());
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold"> Just the home page</h1>
      {/* <GoogleSignIn /> */}

      <button onClick={login}> Random Button</button>
      <Link href={'/login'}> The login link</Link>
    </main>
  );
};

export default Home;
