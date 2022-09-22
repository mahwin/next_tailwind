import React from "react";
import User from "../components/User";
import Articles from "../components/Articles";

export default function Page() {
  return (
    <div>
      <div className="p-[10px] bg-[#1e65ff]">
        <h1 className="text-white text-[40px] max-w-[1200px] m-[0 auto]">
          React Skeletons
        </h1>
      </div>
      <div className="grid grid-cols-2 p-[50px]">
        <Articles />
        <User />
      </div>
    </div>
  );
}
