import React from "react";

import Header from "../../Components/Profile/Header";
import ProfileInfo from "./ProfileInfo";
import NavBottom from "../../Components/NavBottom";

const Profile = () => {
  return(
    <div>
      <Header value="dropmenu" />
      <ProfileInfo  />
      <NavBottom place="profile"/>
    </div>
  );
};

export default Profile;
