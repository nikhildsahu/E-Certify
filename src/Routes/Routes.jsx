import React, { Component } from "react";
import { Link } from "react-router-dom";
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ padding: "50px" }}>
        studentasas
        <Link to="/CreateStudMultisig">CreateStud </Link>
        {/* <Link to="/CreateInstMultisig">CreateInst </Link> */}
        {/* <Link to="upload">Upload </Link> */}
        <Link to="/MyProfileStud">MYProfileStud </Link>
        {/* <Link to="/new">NEW </Link> */}
        {/* <Link to="/MyProfileInst">MYI </Link> */}
        <Link to="/UpdateProfile">Update Profile </Link>
        <Link to="/StudentDashBoard">StudentDashBoard </Link>
        {/* <Link to="/changeinst">Inst chanage req </Link> */}
        {/* <Link to="/instchangeapp">approval chnage </Link>
        <Link to="/instapp">approvalupload </Link>

        <Link to="/ChangeOwnershipApprovalbyInst">
          instchnage approval inst
        </Link> */}
      </div>
    );
  }
}

export default Routes;
