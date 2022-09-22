import React from "react";

const types = {
  text: "w-[100%] h-[12px] rounded",
  avatar: "w-[100px] h-[100px] rounded-full",
  title: "w-[50%] h-[20px] mb-[15px] rounded",
  thumbnail: "w-[100px] h-[100px] rounded",
};

const SkeletonElement = ({ type }) => {
  const classes = "bg-[#dddd] m-[10px] " + types[type];
  return <div className={classes}></div>;
};
export default SkeletonElement;
