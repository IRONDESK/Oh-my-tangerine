import React from "react";
import SettingProfileEdit from "./SettingProfileEdit";
import NavBottom from "../../Components/NavBottom";

import Header from "../../Components/Profile/Header";

const Profile = () => {
  return(
      <div>
        <Header value="submit" checkValue={false} />
        <SettingProfileEdit />
        <NavBottom place="profile" />
      </div>
  );
};

export default Profile;
