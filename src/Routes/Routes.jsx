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
        <Link to="/createStud">CreateStud </Link>
        <Link to="/createInst">CreateInst </Link>

        <Link to="upload">Upload </Link>
        <Link to="/my">MYProfileStud </Link>
        <Link to="/new">NEW </Link>
        <Link to="/myi">MYI </Link>
        <Link to="/UpdateProfile">Update Profile </Link>

        <Link to="/StudentDashBoard">StudentDashBoard </Link>
        <Link to="/changeInstbyStud"> chnageinst </Link>
      </div>
    );
  }
}

export default Routes;
