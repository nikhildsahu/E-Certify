import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        LOGIN
        <br />
        <button
          onClick={() => {
            this.setState({ res: true });
          }}
        >
          STUDENT
        </button>
        <button
          onClick={() => {
            this.setState({ ret: true });
          }}
        >
          INSTITUTE
        </button>{" "}

        {this.state.res ? <Redirect to="/createstud" /> : null}
        {this.state.ret ? <Redirect to="/createinst" /> : null}
        
      </div>
    );
  }
}

export default Login;
