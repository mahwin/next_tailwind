import React from "react";

const types = {
  text: "w-[100%] h-[12px]",
  avatar: "w-[100px] h-[100px] rounded-full",
  title: "w-[50%] h-[20px] mb-[15px]",
  thumbnail: "w-[100px] h-[100px]",
};

const SkeletonElement = ({ type }) => {
  const classes = "bg-[#dddd] m-[10px] rounded " + types[type];
  console.log(classes);
  return <div className={classes}></div>;
};
export default SkeletonElement;
