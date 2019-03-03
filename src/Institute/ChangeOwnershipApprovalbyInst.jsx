import React, { Component } from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";

class ChangeOwnershipApprovalbyInst extends Component {
  state = {
    // instname: "0xcdac9ddd2c5d0441a60a5a1cd27c54aabd889cda",
    // s: "0x8bb6d82f6ec5ea7a651f96f7b3353afb7caa8a47"
    array: []
  };
  verify = async () => {
    const { accounts, contract } = this.props;

    const iwall = await contract.methods
      .getInstitutesWallet(accounts[0])
      .call();
    console.log("all", iwall);
    var array = [];
    iwall.map(async iwall => {
      var newowner = await contract.methods.getChangeOwnerList(iwall).call();
      console.log("chnage", iwall);

      var getDet = await contract.methods.getProfile(iwall).call();
      array.push({ a: iwall, b: newowner[0], name: getDet[0], pic: getDet[1] });
    });

    this.setState({ array: array });
    console.log("array", array);

    // var t = await contract.methods.getUploadReqList(this.state.s).call();
    // console.log(t);
    // var r = await contract.methods.getAadhar().call();
    // console.log(r);
  };
  appro = async a => {
    const { accounts, contract } = this.props;

    await contract.methods
      .approveChangeOwnerINSTReqbyInst(a, a)
      .send({ from: accounts[0] });
  };
  componentWillMount = async () => {
    this.verify();
  };
  render() {
    return (
      <div syle={{ marginTop: "1000px" }}>
        {this.state.array.map(jk => {
          return (
            <div>
              <Grid container style={{ marginTop: "60px" }}>
                <Grid item md={3} />
                <Grid item md={6}>
                  <Card style={{ padding: "15px", width: "700px" }}>
                    <Typography variant="h4" color="primary">
                      Request for Transfer Of Ownership
                    </Typography>
                    <hr />
                    <Typography variant="headline">
                      <span>
                        Request from :{jk.name}
                        <br />
                        <em style={{ color: "#d50000" }}>
                          {jk.a.substring(0, 10)}
                        </em>
                      </span>
                    </Typography>
                    <br />
                    <Typography variant="subheading">
                      <em>{this.props.requester} </em> has requested for{" "}
                      <em style={{ color: "#d50000" }}>{jk.b}</em> of your
                      account!
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
                        onClick={this.appro.bind(this, jk.a)}
                        style={{ color: "#388e3c" }}
                      >
                        Allow
                      </Button>
                    </Grid>
                    <br />
                    <Typography
                      variant="caption"
                      style={{ textAlign: "center" }}
                    >
                      (You can change your Account Prefernces by going int0 the
                      Account settings Page.)
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChangeOwnershipApprovalbyInst;
