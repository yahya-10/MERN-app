import React, { useState } from "react";
import { connect } from "react-redux";

import { getUsers } from "../../actions/users.actions/getUsers";
import { searchByUsername } from "../../actions/users.actions/searchByUsername";

const SearchUser = () => {
  let [searchedUsername, setSearchedUsername] = useState("");

  const onChange = (e) => setSearchedUsername(e.target.value);

  const searchForUser = () => {
    if (searchedUsername === "" || searchedUsername === null) getUsers();
    else searchByUsername(searchedUsername);
  };
  console.log(searchedUsername);
  return (
    <header className="users-header">
      <p className="app_color_font font__bold font__p users-headline">Users</p>
      <br />

      <form className="search-user-wrapper">
        <textarea
          style={{ width: 300, height: 30 }}
          type="text"
          onChange={(e) => onChange(e)}
          value={searchedUsername}
        />

        <div
          className="user-search-button app_color_background font__p font__bold"
          onClick={() => searchForUser(searchedUsername)}
        >
          Search for user
        </div>
      </form>
    </header>
  );
};

export default connect(null, { searchByUsername, getUsers })(SearchUser);
