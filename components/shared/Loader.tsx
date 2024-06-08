"use client";

import {PacmanLoader, BarLoader} from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <BarLoader
        width={200}
        color="#7C5DFA"
      />
    </div>
  );
};

export default Loader;
