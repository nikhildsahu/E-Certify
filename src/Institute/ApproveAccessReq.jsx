import React, { Component } from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";
class ApproveAccessReq extends Component {
  state = {
    s: "0x8bb6d82f6ec5ea7a651f96f7b3353afb7caa8a47",
    array: []
  };

  verify = async () => {
    const { accounts, contract } = this.props;

    const iwall = await contract.methods
      .getInstitutesWallet(accounts[0])
      .call();
    console.log("KK", iwall);
    var array = [];
    iwall.map(async iwall => {
      var uplist = await contract.methods.getUploadReqList(iwall).call();
      console.log("AA", iwall);

      var getDet = await contract.methods.getProfile(iwall).call();
      array.push({ add: iwall, b: uplist[0], name: getDet[0], pic: getDet[1] });
    });

    this.setState({ array: array });
    console.log("AS", array);

    // var t = await contract.methods.getUploadReqList(this.state.s).call();
    // console.log(t);
    // var r = await contract.methods.getAadhar().call();
    // console.log(r);
  };
  getDoc = async add => {
    const { accounts, contract } = this.props;
    var r = await contract.methods.getUplaodReqPic(add, add).call();
    console.log(r);
    this.setState({ pic: r });
    if (r.length > 0) {
      window.open(`https://gateway.ipfs.io/ipfs/${r}`);
    } else {
      window.alert("NULL");
    }
  };

  componentWillMount = async () => {
    this.verify();
  };

  appro = async add => {
    const { accounts, contract } = this.props;

    await contract.methods
      .approveUploadbyInstitute(add, add)
      .send({ from: accounts[0] });
  };

  render() {
    return (
      <div syle={{ marginTop: "1000px" }}>
        {this.state.array.map(jk => {
          return (
            // <div>
            //   <Card>
            //     <h1>{jk.name}</h1>

            //     <h1>{jk.add}</h1>

            //     <button onClick={this.appro.bind(this, jk.add)}>APPROVE</button>
            //   </Card>
            // </div>
            <div>
              <Grid container style={{ marginTop: "60px" }}>
                <Grid item md={3} />
                <Grid item md={6}>
                  <Card style={{ padding: "15px", width: "700px" }}>
                    <Typography variant="h4" color="primary">
                      Document Approval
                    </Typography>
                    <hr />
                    <Typography variant="headline">
                      <span>
                        Request from :{jk.name}
                        <br />
                        <em style={{ color: "#d50000" }}>
                          {jk.add.substring(0, 10)}
                        </em>
                      </span>
                    </Typography>
                    <br />
                    {/* <Typography variant="subheading">
                      <em>{this.props.requester} </em> has requested for{" "}
                      <em style={{ color: "#d50000" }}>{this.props.owntype}</em>{" "}
                      of your account!
                    </Typography> */}
                    <br />
                    <Grid container>
                      <Grid item md={3} />
                      <Button variant="outlined" color="secondary">
                        Deny
                      </Button>
                      <Grid item md={1} />
                      <Button
                        variant="outlined"
                        onClick={this.getDoc.bind(this, jk.add)}
                        style={{ color: "#388e3c" }}
                      >
                        View
                      </Button>

                      <Grid item md={1} />
                      <Button
                        variant="outlined"
                        onClick={this.appro.bind(this, jk.add)}
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

export default ApproveAccessReq;
