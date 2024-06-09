import GoogleSignIn from "@/components/auth/google-signin";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p> Just the home page</p>
      <GoogleSignIn />
    </main>
  );
};

export default Home;
