import React, { Component } from "react";
import { Typography, TextField, Card, Grid, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

class OtpS extends Component {
  state = { r: false, o: "", random: "" };
  submit = async () => {
    if (this.state.o == this.state.random) {
      this.setState({ r: true });
    } else {
      window.alert("Incorrect OTP");
    }
  };
  setE = event => {
    this.setState({ o: event.target.value });
  };
  generateOTP = () => {
    // Declare a digits variable
    // which stores all digits
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };
  set = r => {
    this.setState({ random: r });
    console.log(this.state.random);
  };
  componentDidMount = () => {
    // const rand = Math.floor(1000 + Math.random() * 9000);
    var rand = this.generateOTP();
    this.setState({ random: rand });
    console.log(this.state.random);
    this.set(rand);
    this.state = { random: rand };
    console.log(this.state.random);
    const { accounts } = this.props;
    var key =
      "AAAAX30t50E:APA91bEtGj87SPFqLUAAfrJRmQ3n1xOoXlHjtFOgaK1s9SF3buht2btYGe-8Uorosq1cIQ4BobINBNpN-7y-3txMmhEDKlYZ7DRre8375bIKF9Zdgx4iyER9b6YZETwLia2t0hcPmjW3";
    var to = "/topics/" + "a";

    var notification = {
      title: "OTP",
      body: "The OTP is " + rand,

      icon: "firebase-logo.png",
      click_action: "",
      sound: "default"
    };
    fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        Authorization: "key=" + key,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        notification: notification,
        to: to
      })
    });
  };
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item md={3} style={{ margin: "5%" }}>
            <Card style={{ padding: "25px", width: "500px" }}>
              <Typography variant="h4" color="primary">
                OTP Verification
              </Typography>
              <TextField
                onChange={this.setE}
                id="standard-name"
                label="OTP"
                margin="normal"
                style={{ width: "250px" }}
              />
              <br />
              <Button
                onClick={this.submit}
                variant="outlined"
                color="primary"
                style={{ marginLeft: "25%", marginTop: "10%" }}
              >
                Go
              </Button>
            </Card>
          </Grid>
          {this.state.r ? <Redirect to="/createstud" /> : null}
        </Grid>
      </div>
    );
  }
}

export default OtpS;
