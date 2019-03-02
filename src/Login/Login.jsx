import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Card, Grid, Typography, Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
class Login extends Component {
  state = { stud: false, inst: false, we: false, s: false, i: false };
  exist = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .doesWalletExists(accounts[0])
      .call();
    console.log(response);
    if (response == true) {
      this.setState({ we: true });
    }
    console.log(this.state.we);
  };
  componentDidMount = async () => {
    await this.exist();
  };
  go = () => {
    if (this.state.we == true) {
      if (this.state.stud == true) {
        this.setState({ s: true });
      }
      if (this.state.inst == true) {
        this.setState({ i: true });
      }
    }
  };
  render() {
    return (
      // <div>
      //   LOGIN
      //   <br />
      //   <button
      //     onClick={() => {
      //       this.setState({ res: true });
      //     }}
      //   >
      //     STUDENT
      //   </button>
      //   <button
      //     onClick={() => {
      //       this.setState({ ret: true });
      //     }}
      //   >
      //     INSTITUTE
      //   </button>{" "}
      //   {this.state.res ? <Redirect to="/createstud" /> : null}
      //   {this.state.ret ? <Redirect to="/createinst" /> : null}
      // </div>

      <div>
        <Grid container justify="center">
          <Grid item md={3}>
            <Card>
              <Typography variant="h4" style={{ textAlign: "center" }}>
                Student
              </Typography>
              <Grid container justify="center">
                <Button
                  style={{ margin: "25px" }}
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    this.setState({ stud: true });
                  }}
                >
                  Login
                </Button>{" "}
              </Grid>
            </Card>
          </Grid>
          <Grid item md={1} />
          <Grid item md={3}>
            <Card>
              <Typography variant="h4" style={{ textAlign: "center" }}>
                Institute
              </Typography>{" "}
              <Grid container justify="center">
                <Button
                  style={{ margin: "25px" }}
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    this.setState({ inst: true });
                  }}
                >
                  Login
                </Button>{" "}
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Card />
        {this.go()}
        {this.state.stud ? <Redirect to="/createstud" /> : null}
        {this.state.inst ? <Redirect to="/createinst" /> : null}
      </div>
    );
  }
}

export default Login;
