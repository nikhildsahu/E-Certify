import React, { Component } from "react";
import { Typography, TextField, Card, Grid, Button } from "@material-ui/core";
import fire from "../Fire";

class FreeAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  Qww = () => {};

  setEmail = event => {
    this.setState({ email: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  submit = async () => {
    const { contract, accounts } = this.props;

    const a = await contract.methods.getAadhar(accounts[0]).call();

    await fire
      .database()
      .ref()
      .child("notif")
      .child("A")
      .set({ otp: this.state.password, aadhar: a, req: accounts[0] });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={2} />
          <Grid item md={3} style={{ margin: "5%" }}>
            <Card style={{ padding: "25px", width: "500px" }}>
              <Typography variant="h4" color="primary">
                Free Access
              </Typography>
              <TextField
                onChange={this.setEmail}
                id="standard-name"
                label="Email Address"
                margin="normal"
                style={{ width: "250px" }}
              />
              <br />
              <TextField
                onChange={this.setPassword}
                type="password"
                id="standard-name"
                label="Password"
                margin="normal"
                style={{ width: "250px" }}
              />{" "}
              <br />
              <Button
                onClick={this.submit}
                variant="outlined"
                color="primary"
                style={{ marginLeft: "25%", marginTop: "10%" }}
              >
                Request
              </Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FreeAccess;
