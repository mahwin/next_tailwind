import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonProfile = () => {
  return (
    <div className="grid grid-cols-3 items-center relative overflow-hidden">
      <div>
        <SkeletonElement type="avatar" />
      </div>
      <div className="col-span-2">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProfile;
