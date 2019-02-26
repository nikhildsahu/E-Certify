import React, { Component } from "react";
import { Link } from "react-router-dom";
class InstRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ padding: "50px" }}>
        inst
        <Link to="/CreateInstMultisig">CreateInst </Link>
        <Link to="/UpdateProfile">Update Profile </Link>
        <Link to="/InstituteDashBoard">InstituteDashBoard </Link>
        <Link to="/changeinst">Inst chanage req </Link>
        <Link to="/dd">Inst </Link>
      </div>
    );
  }
}

export default InstRoutes;
