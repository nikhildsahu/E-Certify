import React, { Component } from "react";
import { Typography, TextField, Card, Grid, Button } from "@material-ui/core";

class FreeAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  setEmail = event => {
    this.setState({ email: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  submit = () => {};

  render() {
    return (
      <div>
        <Grid item md={3} style={{ margin: "5%" }}>
          <Card style={{ padding: "25px", width: "500px" }}>
            <Typography variant="h4" color="primary">
              Free Access
            </Typography>
            <TextField
              onChange={this.setEmail}
              id="standard-name"
              label="Email"
              margin="normal"
              style={{ width: "250px" }}
            />
            <br />
            <TextField
              onChange={this.setPassword}
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
      </div>
    );
  }
}

export default FreeAccess;
