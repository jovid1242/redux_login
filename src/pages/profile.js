import React from "react";
import "../styles/profile.css";

import { useSelector } from "react-redux";

function Profile() {
  const users = useSelector((state) => state.auth.users);
  return (
    <div>
      <div className="profile">
        <div className="info_user">
          <h1>Привет {users[0].login}</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
