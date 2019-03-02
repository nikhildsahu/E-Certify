import React, { Component } from "react";
import { Card, Grid, Typography, Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { rei: false, res: false };
  }
  render() {
    return (
      // <div>
      //   <button
      //     onClick={() => {
      //       this.setState({ rei: !this.state.rei });
      //     }}
      //   >
      //     Studnet{" "}
      //   </button>
      //   <button
      //     onClick={() => {
      //       this.setState({ res: !this.state.res });
      //     }}
      //   >
      //     Institute{" "}
      //   </button>
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
                >
                  Login
                </Button>{" "}
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Card />
      </div>
    );
  }
}

export default Login;
