import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { rei: false, res: false };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ rei: !this.state.rei });
          }}
        >
          Studnet{" "}
        </button>
        <button
          onClick={() => {
            this.setState({ res: !this.state.res });
          }}
        >
          Institute{" "}
        </button>
      </div>
    );
  }
}

export default Login;
