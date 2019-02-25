import React, { Component } from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";
class ApproveUpload extends Component {
  state = {
    s: "0x8bb6d82f6ec5ea7a651f96f7b3353afb7caa8a47"
  };
  verify = async () => {
    const { accounts, contract } = this.props;

    await contract.methods
      .approveUploadbyInstitute(this.state.s, this.state.s)
      .send({ from: accounts[0] });
    var t = await contract.methods.getUploadReqList(this.state.s).call();
    console.log(t);
    var r = await contract.methods.getAadhar().call();
    console.log(r);
  };

  render() {
    return (
      // <div>
      //   <button onClick={this.verify.bind(this)}>verify</button>
      // </div>
      <div>
        <Grid container style={{ marginTop: "60px" }}>
          <Grid item md={3} />
          <Grid item md={6}>
            <Card style={{ padding: "15px" }}>
              <Typography variant="h4" color="primary">
                Request for Approval Of Document
              </Typography>
              <hr />
              <Typography variant="headline">
                <span>
                  Request from :{" "}
                  <em style={{ color: "#d50000" }}>{this.state.s}</em>
                </span>
              </Typography>
              <br />
              {/* <Typography variant="subheading">
             <em>{this.props.requester} </em> has requested for{" "}
             <em style={{ color: "#d50000" }}>{this.props.owntype}</em> of
             your account!
           </Typography> */}
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
                (You can change your Account Prefernces by going into the
                Account settings Page.)
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ApproveUpload;
