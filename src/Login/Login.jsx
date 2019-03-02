import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Particles from "react-particles-js";
import { Card, Grid, Typography, Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const particleOpt = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
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

      // <div style={{ height: "1000px", backgroundColor: "#2196f3" }}>
      //   <Grid container justify="center">
      //     <Grid item md={12}>
      //       <div>
      //         <h1 style={{ height: "300px" }} />
      //       </div>
      //     </Grid>
      //     <Grid item md={3}>
      //       <Card>
      //         <Typography variant="h4" style={{ textAlign: "center" }}>
      //           Student
      //         </Typography>
      //         <Grid container justify="center">
      //           <Button
      //             style={{ margin: "25px" }}
      //             variant="outlined"
      //             color="secondary"
      //             onClick={() => {
      //               this.setState({ stud: true });
      //             }}
      //           >
      //             Sign UP
      //           </Button>{" "}
      //           <br />
      //           <Button
      //             style={{ margin: "25px" }}
      //             variant="outlined"
      //             color="secondary"
      //             onClick={() => {
      //               this.setState({ s: true });
      //             }}
      //           >
      //             Login
      //           </Button>{" "}
      //         </Grid>
      //       </Card>
      //     </Grid>
      //     <Grid item md={1} />
      //     <Grid item md={3}>
      //       <Card>
      //         <Typography variant="h4" style={{ textAlign: "center" }}>
      //           Institute
      //         </Typography>{" "}
      //         <Grid container justify="center">
      //           <Button
      //             style={{ margin: "25px" }}
      //             variant="outlined"
      //             color="secondary"
      //             onClick={() => {
      //               this.setState({ inst: true });
      //             }}
      //           >
      //             Sign Up
      //           </Button>{" "}
      //           <br />
      //           <Button
      //             style={{ margin: "25px" }}
      //             variant="outlined"
      //             color="secondary"
      //             onClick={() => {
      //               this.setState({ i: true });
      //             }}
      //           >
      //             Login
      //           </Button>{" "}
      //         </Grid>
      //       </Card>
      //     </Grid>
      //   </Grid>
      //   <Card />

      // {this.state.stud ? <Redirect to="/createstud" /> : null}
      // {this.state.inst ? <Redirect to="/createinst" /> : null}
      // {this.state.s ? <Redirect to="/StudentDashBoard" /> : null}
      // {this.state.i ? <Redirect to="/InstituteDashBoard" /> : null}
      // </div>
      <div style={{ height: "980px", backgroundColor: "#2196f3" }}>
        <Particles params={particleOpt} />

        <div style={{ position: "absolute", top: "250px", left: "225px" }}>
          <Grid container justify="center">
            <Grid item md={3}>
              <div
                style={{ position: "absolute", marginLeft: "250px" }}
                className="shadow"
              >
                <Card
                  style={{
                    width: "400px",
                    height: "580px",
                    backgroundColor: "#e3f2fd"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "25px" }}
                  >
                    Student
                  </Typography>
                  <Grid container justify="center">
                    <Avatar style={{ width: "365px", height: "365px" }}>
                      <img
                        src="https://image.flaticon.com/icons/svg/1256/1256661.svg"
                        alt=""
                        style={{ height: "400px", margin: "10px" }}
                      />
                    </Avatar>
                  </Grid>
                  <Grid container justify="center">
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ s: true });
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ stud: true });
                      }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Grid>
                </Card>
              </div>
            </Grid>
            <Grid item md={6} />
            <Grid item md={3}>
              <div
                style={{ position: "absolute", marginLeft: "750px" }}
                className="shadow"
              >
                <Card
                  style={{
                    width: "400px",
                    height: "580px",
                    backgroundColor: "#e3f2fd"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "25px" }}
                  >
                    Institute
                  </Typography>
                  <Grid container justify="center">
                    <Avatar style={{ width: "365px", height: "365px" }}>
                      <img
                        src="https://image.flaticon.com/icons/svg/501/501435.svg"
                        alt=""
                        style={{ height: "400px", margin: "10px" }}
                      />
                    </Avatar>
                  </Grid>
                  <Grid container justify="center">
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ i: true });
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ margin: "25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        this.setState({ inst: true });
                      }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Grid>
                </Card>
              </div>
            </Grid>
          </Grid>
          {/* <Particles params={particleOpt} /> */}
        </div>
        {this.state.stud ? <Redirect to="/createstud" /> : null}
        {this.state.inst ? <Redirect to="/createinst" /> : null}
        {this.state.stud ? <Redirect to="/GoogleLoginS" /> : null}
        {this.state.inst ? <Redirect to="/GoogleLoginI" /> : null}
        {this.state.s ? <Redirect to="/StudentDashBoard" /> : null}
        {this.state.i ? <Redirect to="/InstituteDashBoard" /> : null}
      </div>
    );
  }
}

export default Login;
