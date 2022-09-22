import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = () => {
  return (
    <div className="m-[20px auto] p-[10px]">
      <div className="">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
