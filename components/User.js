import React, { useState, useEffect } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div className="user">
      <h2 className="mb-5 p-3 text-[25px] font-bold">User Detail</h2>
      <hr />
      {profile && (
        <div className="p-3">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
      {!profile && <SkeletonProfile />}
    </div>
  );
};

export default User;
