import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonProfile = () => {
  return (
    <div className="grid grid-cols-3 items-center">
      <div>
        <SkeletonElement type="avatar" />
      </div>
      <div className="col-span-2">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
};

export default SkeletonProfile;
