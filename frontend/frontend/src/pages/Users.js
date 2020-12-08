import React, { useEffect } from "react";
import { connect } from "react-redux";

import UsersWrapper from "../pages/Users/UserWrapper";
import SearchUser from "./Users/SearchUser";

import { getUsers } from "../actions/users.actions/getUsers";


const Users = ({ getUsers, auth }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <SearchUser />
      <div className="users-wrapper">
        <UsersWrapper users={auth.users} key={auth._id} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getUsers })(Users);
