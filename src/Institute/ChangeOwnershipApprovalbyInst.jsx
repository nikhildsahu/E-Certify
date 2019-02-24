import React, { Component } from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";

class ChangeOwnershipApprovalbyInst extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                  <em style={{ color: "#d50000" }}>{this.props.requester}</em>
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
                <Button variant="outlined" style={{ color: "#388e3c" }}>
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
