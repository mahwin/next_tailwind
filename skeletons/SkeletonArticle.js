import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = ({ light }) => {
  const themeClass = !light ? "bg-[#f2f2f2]" : "bg-[#444]";
  return (
    <div className={`my-[20px] mx-auto p-[10px] relative ${themeClass}`}>
      <div className="">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonArticle;
