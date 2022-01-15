import React from "react";
import SettingProfileEdit from "./SettingProfileEdit";

import Header from "./Header";

const Profile = () => {
  return(
      <div>
        <Header value="submit" checkValue={false} />
        <SettingProfileEdit />
      </div>
  );
};

export default Profile;
