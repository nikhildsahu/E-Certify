import React, { Component } from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";

class ChangeOwnershipApprovalbyInst extends Component {
  state = {
    instname: "0xcdac9ddd2c5d0441a60a5a1cd27c54aabd889cda",
    s: "0x8bb6d82f6ec5ea7a651f96f7b3353afb7caa8a47"
  };
  verify = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    console.log("current owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);
    await contract.methods
      .approveChangeOwnerINSTReqbyInst(this.state.s, this.state.s)
      .send({ from: accounts[0] });
    const response1 = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response1[0] });
    this.setState({ owner2: response1[1] });
    console.log(" new owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);
  };
  render() {
    return (
      <div>
        <Grid container style={{ marginTop: "60px" }}>
          <Grid item md={3} />
          <Grid item md={6}>
            <Card style={{ padding: "15px" }}>
              <Typography variant="h4" color="primary">
                Request for Transfer Of Ownership
              </Typography>
              <hr />
              <Typography variant="headline">
                <span>
                  Request from :{" "}
                  <em style={{ color: "#d50000" }}>{this.state.s}</em>
                </span>
              </Typography>
              <br />
              <Typography variant="subheading">
                <em>{this.props.requester} </em> has requested for{" "}
                <em style={{ color: "#d50000" }}>{this.props.owntype}</em> of
                your account!
              </Typography>
              <br />
              <Grid container>
                <Grid item md={4} />
                <Button variant="outlined" color="secondary">
                  Deny
                </Button>
                <Grid item md={1} />
                <Button
                  variant="outlined"
                  onClick={this.verify.bind(this)}
                  style={{ color: "#388e3c" }}
                >
                  Allow
                </Button>
              </Grid>
              <br />
              <Typography variant="caption" style={{ textAlign: "center" }}>
                (You can change your Account Prefernces by going int0 the
                Account settings Page.)
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ChangeOwnershipApprovalbyInst;
