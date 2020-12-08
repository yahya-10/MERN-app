import React from "react";
import SingleAccountData from "./SingleAccountData";

const AccountPageSection = ({ name, lastName, userName, role, email }) => {
  return (
    <div className="data-items">
      <SingleAccountData dataName="Name:" dataToShow={name} />

      <SingleAccountData dataName="Last Name:" dataToShow={lastName} />

      <SingleAccountData dataName="Username:" dataToShow={userName} />

      <SingleAccountData dataName="Role:" dataToShow={role} />

      <SingleAccountData dataName="E-mail:" dataToShow={email} />
    </div>
  );
};

export default AccountPageSection;
